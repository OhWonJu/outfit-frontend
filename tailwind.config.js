/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sansSrif: "sans-serif" },
      aspectRatio: {
        "2/1": "2 / 1",
        "7/2": "7 / 2",
        "10/16": "10 / 16",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      "screen-w-700": "700px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      xmd: "940px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
