/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      // => @media (min-width: 300px) {...}

      sm: "400px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        applicationColor: "#1c2e4a",
        applicationIconBg: "#12204d4f",
      },
    },
  },
  plugins: [],
};
// bg-[#12204d4f]]  for backgroung of img/icon
// bg-[#12204d36] for background color for card and application
