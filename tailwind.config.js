/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        primary: ["JetBrains Mono", "monospace"],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
      colors: {
        // 🌑 Dark Mode Colors
        darkPrimary: {
          DEFAULT: "#1c1c22", // Background
          dark: "#141422", // Darker background
        },
        darkAccent: {
          DEFAULT: "#00ff99", // Buttons, interactive elements
          hover: "#00e187", // Hover state
        },
        darkGray: {
          DEFAULT: "#27272c", //"#6B7280", // Neutral gray
        },
        darkText: {
          DEFAULT: "#E5E7EB", // Light grayish-white for main text
          secondary: "#9CA3AF", // Lighter gray for secondary text
          muted: "#4B5563", // Muted gray for less important text
        },

        // ☀️ Light Mode Colors
        lightPrimary: {
          DEFAULT: "#ffffff", // Background
          dark: "#f4f4f4", // Section backgrounds
        },
        lightAccent: {
          DEFAULT: "#007f5f", // Buttons, interactive elements
          hover: "#00684a", // Hover state
        },
        lightGray: {
          DEFAULT: "#E5E7EB", //"#D1D5DB", // "#4b5563", // Neutral gray
        },
        lightText: {
          DEFAULT: "#1F2937", // Dark gray for main text
          secondary: "#4B5563", // Slightly lighter for secondary text
          muted: "#9CA3AF", // Muted gray for less important text
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
      },
      boxShadow: {
        "theme-accent": "var(--accent-default)",
      },
    },
  },
  important: true,
};
