/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*index.html"],
  theme: {
    extend: {
      backgroundImage: {
        mainImage: "url('dist/Netflix Main Image.jpg)",
      },
    },
  },
  plugins: [],
};
