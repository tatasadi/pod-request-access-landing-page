import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "hsl(157, 74%, 62%)",
        },
        neutral: {
          "gray-700": "hsl(225, 26%, 23%)",
          "gray-400": "hsl(225, 21%, 45%)",
          "gray-100": "hsl(225, 40%, 83%)",
          dark: "hsl(224, 35%, 11%)",
        },
      },
    },
  },
  plugins: [],
}
export default config
