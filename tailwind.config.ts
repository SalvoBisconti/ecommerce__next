import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      first: "#ffffff",
      second: "#f8f8f8",
      red: "#e22018",
      black: "#100c08",
      stronGray: "#cacaca",
      green: "#4f9d51",
      lightBlack: "#4a4a4a",
    },
    fontSize: {
      paraph: "1.5rem",
      title: "1.8rem",
    },
  },
  plugins: [],
};
export default config;
