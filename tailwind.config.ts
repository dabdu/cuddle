import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#552B94",
        faintPrimary: "hsla(281, 90%, 77%, 0.11)",
        customBlack: "hsla(245, 21%, 12%, 0.75)"
      }
    },
  },
  plugins: [],
};
export default config;
