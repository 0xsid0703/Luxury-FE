import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        heroYellow: "#E5CE87",
        blendingYellow: "#9C7C55",
        greyColor: "#C1C2C2",
        mainGreyColor: "#80898B",
        blendingButton: "#FFE281",
        descColor: "#787878",
      },
      backgroundColor: {
        mainBackground: "#F4F2EE",
        yellowColor: "#F3CF72",
        limitedColor: "#FFC58461",
        "hero-card": "#84848469",
        blendingButton: "#1F1B16",
        "product-hero": "#63151F",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
