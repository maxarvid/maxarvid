---
layout: posts
---

# One Step Forward
Well, this has been a bit of a dud. I installed [tailwindcss](https://tailwindcss.com/) on a separate branch, following [this](https://stevenwestmoreland.com/2021/01/using-tailwind-css-with-jekyll.html) tutorial. The tutorial itself was hunky doory, though slightly outdated (`purge` has been replaced by `content`), so the `tailwind.config.js` file looks as follows for me:
```js
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
```
NB That I've removed the `darkMode` in another nod to Tailwind 3.1.0.

## One Step Back
All that to say that once I had it up and running, it quickly dawned on my that Tailwind is not the right choice for how I want to use Jekyll. My goal is of course to eventually only write blog posts and have the styling be automatic. But Tailwind relies on class attributes that cannot be insterted into Markdown, so I would be unable to style the attributes generated by Jekyll without some serious hacking. It was fun to get it running, but the quest must go on. I will close the draft PR on the [GitHub repo](https://github.com/maxarvid/maxarvid/pulls?q=is%3Apr+is%3Aclosed), but it you are curious you I'll leave it there as an example of what not to do.