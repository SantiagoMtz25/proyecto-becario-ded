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
        background: "var(--background)",
        foreground: "var(--foreground)",
        light_green: '#8CC56C',
        kinda_yellow: '#FF9900',
        kinda_orange: '#FF8431',
      },
    },
    screens: {
      'sm': "480px",
      'md': "768px",
      'lg': "1010px",
      'xl': "1280px",
      '2xl': "1536px"
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
