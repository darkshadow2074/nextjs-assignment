import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mulish: ['var(--font-mulish)', 'sans-serif'], 
        rubik: ['var(--font-rubik)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        'custom-sm': '0.875rem', // Custom size (14px)
        'custom-base': '1rem',   // Custom size (16px)
        'custom-lg': '1.25rem',  // Custom size (20px)
        'custom-xl': '1.5rem',   // Custom size (24px)
        'custom-2xl': '2rem',    // Custom size (32px)
      },
    },
  },
  plugins: [],
};
export default config;
