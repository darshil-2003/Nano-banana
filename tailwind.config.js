/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08020e",
        foreground: "#ffffff",
        "card-background": "rgba(255, 255, 255, 0.1)",
        "border-color": "rgba(255, 255, 255, 0.1)",
        "accent-purple": "#9e67fa",
        "accent-blue": "#3b82f6",
        "accent-pink": "#fe6abb",
        "accent-orange": "#ff9c65",
      },
      fontFamily: {
        sans: [
          "Mona Sans",
          "var(--font-geist-sans)",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-particles": "float-particles 3s ease-in-out infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "scroll-right": "scroll-right 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-particles": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translateY(-20px) rotate(180deg)",
            opacity: "1",
          },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      backdropBlur: {
        sm: "4px",
      },
    },
  },
  plugins: [],
};
