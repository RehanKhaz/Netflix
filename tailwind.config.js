/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        mainImage: "url('dist/Netflix Main Image.jpg)",
      },
    },
  },
  plugins: [],
};
