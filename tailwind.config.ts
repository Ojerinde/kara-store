import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        "custom-white": "#FFF",
        "custom-white-1": "#F5F5F5",
        "custom-grey": "#808080",
        "custom-grey-light-1": "#AAAAAA",
        "custom-grey-light-2": "#D4D4D4",
        "custom-black": "#1A1A1A",
        "custom-black-1": "#333333",
        "custom-black-2": "#555555",
        "custom-red": "#EC0000",
        "custom-red-light-1": "#FBCCCC",
        "custom-red-light-2": "#F9AAAA",
        "custom-red-light-3": "#F58080",
        "custom-red-light-4": "#F25555",
        "custom-red-light-5": "#EF2B2B",
        "custom-red-dark-1": "#C50000",
        "custom-red-dark-2": "#9D0000",
        "custom-red-dark-3": "#760000",
        "custom-red-dark-4": "#4F0000",
        "custom-red-dark-5": "#2F0000",
        "custom-yellow": "#F8DF00",
        "custom-yellow-light-1": "#FEF9CC",
        "custom-yellow-light-2": "#FDF4AA",
        "custom-yellow-light-3": "#FBEF80",
        "custom-yellow-light-4": "#FAEA55",
        "custom-yellow-light-5": "#F9E42B",
        "custom-yellow-dark-1": "#CFBA00",
        "custom-yellow-dark-2": "#A59500",
        "custom-yellow-dark-3": "#7C7000",
        "custom-yellow-dark-4": "#534A00",
        "custom-yellow-dark-5": "#322D00",
      },
    },
  },
  plugins: [],
};

export default config;
