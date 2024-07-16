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
      colors: {
        primary: '#E63946',
        secondary: '#F1FAEE',
        accent1: '#A8DADC',
        accent2: '#457B9D',
        background: '#1D3557',
      },
      fontFamily: {
        'noto-kufi': ['"Noto Kufi Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
