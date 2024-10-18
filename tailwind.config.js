/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jelly: {
          "0%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(1.25, 0.75)" },
          "50%": { transform: "scale(0.75, 1.25)" },
          "75%": { transform: "scale(1.15, 0.85)" },
          "100%": { transform: "scale(1, 1)" },
        },
        popInOut: {
          "0%, 100%": { transform: "scale(0.8)", opacity: 0 },
          "50%": { transform: "scale(1.2)", opacity: 1 },
        },
        rollIn: {
          "0%": { transform: "translateX(-100%) rotate(-360deg)" },
          "100%": { transform: "translateX(0) rotate(0deg)" },
        },
        rollOut: {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "100%": { transform: "translateX(100%) rotate(360deg)" },
        },
        rollInOut: {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(50%) rotate(360deg)" },
          "100%": { transform: "translateX(0) rotate(0deg)" },
        },
        rollOutIn: {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(-50%) rotate(-360deg)" },
          "100%": { transform: "translateX(0) rotate(0deg)" },
        },
        blobPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        tiltRight: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        tiltLeft: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-10deg)" },
        },
        hoverGlow: {
          "0%": { boxShadow: "0 0 0px rgba(255, 255, 255, 0)" },
          "90%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" },
          "100%": { boxShadow: "0 0 0px rgba(255, 255, 255, 0)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(2px)" },
          "75%": { transform: "translateX(-2px)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        jelly: "jelly 0.6s ease-in-out",
        popInOut: "popInOut 0.8s ease-in-out forwards",
        rollIn: "rollIn 0.8s ease-out",
        rollOut: "rollOut 0.8s ease-out",
        rollInOut: "rollInOut 1.6s ease-in-out",
        rollOutIn: "rollOutIn 1.6s ease-in-out",
        blobPulse: "blobPulse 2s ease-in-out infinite",
        tiltRight: "tiltRight 1s ease-in-out",
        tiltLeft: "tiltLeft 1s ease-in-out",
        hoverGlow: "hoverGlow 1s ease-in-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
