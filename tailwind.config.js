module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  this: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
