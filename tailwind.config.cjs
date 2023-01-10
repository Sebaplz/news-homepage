/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-web-mobile": "url('/images/image-web-3-mobile.jpg')",
        "image-web-desktop": "url('/images/image-web-3-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
