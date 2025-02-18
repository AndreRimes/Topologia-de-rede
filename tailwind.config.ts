import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#FFFDF8",
        "primary": "#FFF4DA",
        "orange": "#FFC480",
        "red": "#FE4A60",
        "green": "#5CF1A4",
        "border": "#111827",
      },
      fontFamily: {
        'system': ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
