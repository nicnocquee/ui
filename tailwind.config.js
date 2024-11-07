/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*"],
  theme: {
    extend: {
      keyframes: {
        "flutter-left": {
          "10%": { transform: "scale(1, 0.9)" },
          "20%": { transform: "scale(0.5, 1)" },
          "40%": { transform: "scale(0.9, 0.95)" },
          "60%": { transform: "scale(0.3, 1)" },
          "80%": { transform: "scale(0.9, 0.95)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "flutter-right": {
          "10%": { transform: "scale(-1, 0.9)" },
          "20%": { transform: "scale(-0.5, 1)" },
          "40%": { transform: "scale(-0.9, 0.95)" },
          "60%": { transform: "scale(-0.3, 1)" },
          "80%": { transform: "scale(-0.9, 0.95)" },
          "100%": { transform: "scale(-1, 1)" },
        },
      },
      animation: {
        "flutter-left": "flutter-left 430ms ease-in-out",
        "flutter-right": "flutter-right 500ms ease-in-out",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
