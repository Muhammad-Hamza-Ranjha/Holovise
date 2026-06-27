import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        holo: {
          ink: "#050014",
          night: "#090314",
          panel: "#110a25",
          line: "rgba(255,255,255,0.14)",
          muted: "#a7a3b7",
          violet: "#7c3cff",
          blue: "#08a8ff",
          cyan: "#62e7ff",
          lime: "#d4ff3f",
          paper: "#f7f7fb",
          text: "#11111a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "Arial", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["20px", { lineHeight: "20px", fontWeight: "500" }],
        hero: ["86px", { lineHeight: "0.98", fontWeight: "700", letterSpacing: "0" }],
        display: ["58px", { lineHeight: "1.08", fontWeight: "700", letterSpacing: "0" }],
        section: ["40px", { lineHeight: "1.16", fontWeight: "700", letterSpacing: "0" }],
        card: ["24px", { lineHeight: "1.25", fontWeight: "600", letterSpacing: "0" }],
        body: ["18px", { lineHeight: "1.6", fontWeight: "400", letterSpacing: "0" }],
      },
      spacing: {
        18: "72px",
        22: "88px",
        30: "120px",
        32: "128px",
      },
      boxShadow: {
        glow: "0 24px 100px rgba(94, 55, 255, 0.28)",
        soft: "0 30px 90px rgba(15, 10, 40, 0.16)",
      },
      backgroundImage: {
        "holo-gradient": "linear-gradient(105deg, #7c3cff 0%, #0c7dff 55%, #62e7ff 100%)",
        "holo-radial": "radial-gradient(circle at 70% 20%, rgba(124,60,255,0.55), transparent 32%), radial-gradient(circle at 90% 50%, rgba(8,168,255,0.42), transparent 28%)",
      },
    },
  },
};

export default config;
