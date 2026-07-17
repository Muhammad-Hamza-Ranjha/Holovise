import fs from "node:fs";
import path from "node:path";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const root = path.join("visual-tests", "deployment-audit");
const diffRoot = path.join(root, "diffs");
fs.mkdirSync(diffRoot, { recursive: true });

function read(filePath) {
  return PNG.sync.read(fs.readFileSync(filePath));
}

function compare(referencePath, currentPath, diffPath, label) {
  const reference = read(referencePath);
  const current = read(currentPath);
  if (reference.width !== current.width || reference.height !== current.height) {
    throw new Error(`${label}: expected ${reference.width}x${reference.height}, received ${current.width}x${current.height}`);
  }

  const diff = new PNG({ width: reference.width, height: reference.height });
  const mismatchPixels = pixelmatch(
    reference.data,
    current.data,
    diff.data,
    reference.width,
    reference.height,
    {
      threshold: 0.1,
      includeAA: false,
      diffColor: [255, 0, 80],
      aaColor: [255, 210, 0],
    },
  );
  fs.writeFileSync(diffPath, PNG.sync.write(diff));
  const totalPixels = reference.width * reference.height;
  return {
    label,
    width: reference.width,
    height: reference.height,
    mismatchPixels,
    mismatchPercentage: (mismatchPixels / totalPixels) * 100,
    referencePath: referencePath.replaceAll("\\", "/"),
    currentPath: currentPath.replaceAll("\\", "/"),
    diffPath: diffPath.replaceAll("\\", "/"),
  };
}

const representatives = [
  ["desktop", 1440, 900],
  ["tablet", 820, 1180],
  ["mobile", 390, 844],
];

const liveVsLocal = [];
for (const theme of ["light", "dark"]) {
  for (const [group, width, height] of representatives) {
    liveVsLocal.push(
      compare(
        path.join(root, "live", theme, `${width}x${height}.png`),
        path.join(root, "local", theme, `${width}x${height}.png`),
        path.join(diffRoot, `homepage-${group}-${theme}.png`),
        `live-vs-local ${group} ${theme}`,
      ),
    );
  }
}

const figmaVsLocal = [];
for (const theme of ["light", "dark"]) {
  figmaVsLocal.push(
    compare(
      path.join("visual-tests", "references", "home", theme, "figma-1440x12496.png"),
      path.join(root, "local", theme, "1440x900.png"),
      path.join(diffRoot, `figma-vs-local-desktop-${theme}.png`),
      `figma-vs-local desktop ${theme}`,
    ),
  );
}

const sectionBounds = [
  ["hero", 0, 974],
  ["services", 974, 2558],
  ["primary-cta", 2558, 2971],
  ["industries", 2971, 5130],
  ["testimonials", 5130, 5855],
  ["process", 5855, 7585],
  ["fit-cta", 7585, 8215],
  ["impact", 8215, 9490],
  ["blog", 9490, 10368],
  ["contact", 10368, 10995],
  ["footer", 10995, 12496],
];

const sectionDiffs = [];
for (const theme of ["light", "dark"]) {
  const reference = read(path.join("visual-tests", "references", "home", theme, "figma-1440x12496.png"));
  const current = read(path.join(root, "local", theme, "1440x900.png"));
  for (const [section, start, end] of sectionBounds) {
    const firstByte = start * reference.width * 4;
    const lastByte = end * reference.width * 4;
    const height = end - start;
    const mismatchPixels = pixelmatch(
      reference.data.subarray(firstByte, lastByte),
      current.data.subarray(firstByte, lastByte),
      null,
      reference.width,
      height,
      { threshold: 0.1, includeAA: false },
    );
    sectionDiffs.push({
      theme,
      section,
      mismatchPixels,
      mismatchPercentage: (mismatchPixels / (reference.width * height)) * 100,
    });
  }
}

const liveReport = JSON.parse(fs.readFileSync(path.join(root, "live", "report.json"), "utf8"));
const localReport = JSON.parse(fs.readFileSync(path.join(root, "local", "report.json"), "utf8"));
const normalizeAssets = (result) =>
  [...new Set(result.diagnostics.assets.map((url) => {
    const parsed = new URL(url);
    return `${parsed.pathname}${parsed.search}`;
  }))].sort();

const assetComparisons = [];
for (const theme of ["light", "dark"]) {
  for (const [group, width, height] of representatives) {
    const live = liveReport.results.find(
      (result) => result.theme === theme && result.viewport.width === width && result.viewport.height === height,
    );
    const local = localReport.results.find(
      (result) => result.theme === theme && result.viewport.width === width && result.viewport.height === height,
    );
    const liveAssets = normalizeAssets(live);
    const localAssets = normalizeAssets(local);
    assetComparisons.push({
      group,
      theme,
      liveAssetCount: liveAssets.length,
      localAssetCount: localAssets.length,
      identicalAssetPaths: JSON.stringify(liveAssets) === JSON.stringify(localAssets),
      liveOnly: liveAssets.filter((asset) => !localAssets.includes(asset)),
      localOnly: localAssets.filter((asset) => !liveAssets.includes(asset)),
    });
  }
}

const report = { liveVsLocal, figmaVsLocal, sectionDiffs, assetComparisons };
const reportPath = path.join(root, "comparison-report.json");
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
console.log(`Report: ${reportPath}`);
