const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#f8fafc",
        foreground: "#1e293b",
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F1F0FB",
          foreground: "#222222",
        },
        destructive: {
          DEFAULT: "#ea384c",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F1F0FB",
          foreground: "#555555",
        },
        accent: {
          DEFAULT: "#E5DEFF",
          foreground: "#222222",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#222222",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#222222",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
// Add this at the top of your file or in a declaration file
declare function require(id: string): any;
import type { Config } from "tailwindcss";


let strLength: number = 16; //Corrected the declaration
enum Status {
  Active,
  Inactive,
  Pending
}

let someValue: Status = Status.Active;
console.log(someValue); // Output: 0 (index of Active in the enum)
console.log(strLength); // Output: 16