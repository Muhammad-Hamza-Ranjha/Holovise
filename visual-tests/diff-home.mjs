import fs from "node:fs";
import path from "node:path";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const maximumMismatch = Number(process.env.MAX_VISUAL_MISMATCH ?? 10);

function read(filePath) {
  return PNG.sync.read(fs.readFileSync(filePath));
}

function compare(theme) {
  const referencePath = `visual-tests/references/home/${theme}/figma-1440x12496.png`;
  const currentPath = `visual-tests/current/home/${theme}/1440x900.png`;
  const diffPath = `visual-tests/diffs/home/${theme}/1440x900.png`;
  const reference = read(referencePath);
  const current = read(currentPath);
  if (reference.width !== current.width || reference.height !== current.height) {
    throw new Error(`${theme}: expected ${reference.width}x${reference.height}, received ${current.width}x${current.height}`);
  }
  const diff = new PNG({ width: reference.width, height: reference.height });
  const mismatchPixels = pixelmatch(reference.data, current.data, diff.data, reference.width, reference.height, {
    threshold: 0.1,
    includeAA: false,
    diffColor: [255, 0, 80],
    aaColor: [255, 210, 0],
  });
  fs.mkdirSync(path.dirname(diffPath), { recursive: true });
  fs.writeFileSync(diffPath, PNG.sync.write(diff));
  const totalPixels = reference.width * reference.height;
  return { theme, width: reference.width, height: reference.height, mismatchPixels, mismatchPercentage: mismatchPixels / totalPixels * 100, referencePath, currentPath, diffPath };
}

const report = [compare("light"), compare("dark")];
fs.mkdirSync("visual-tests/reports", { recursive: true });
fs.writeFileSync("visual-tests/reports/canonical-1440.json", `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (report.some((entry) => entry.mismatchPercentage > maximumMismatch)) process.exitCode = 1;
