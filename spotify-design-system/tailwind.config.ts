import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          black: "#191414",
          white: "#FFFFFF",
          gray: "#535353",
          lightgray: "#B3B3B3",
          darkgray: "#282828",
          card: "#181818",
        },
      },
    },
  },
  plugins: [],
};
export default config;
