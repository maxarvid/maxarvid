---
layout: posts
---

# Hello World!
It all has to begin with a hello world. I'm purposefully putting together this little Jekyll blog from scratch. There are a couple of reasons for this: It'll be a useful place to showcase some work, it's a great way to learn the inner workings of Jekyll, and most importantly it's fun. All that and though my memory is good, it's also short, so I need a repository beyond those up on GitHub to remind me of what I get up to. 

At the time of typing up this post, there are only two pages, an `index` and an `about` page. Here is the file structure:
```bash
$ tree -I _site
.
├── Gemfile
├── Gemfile.lock
├── _config.yml
├── _data
│   └── navigation.yml
├── _drafts
├── _includes
│   ├── navigation.html
│   └── posts.html
├── _layouts
│   └── default.html
├── _posts
│   └── 2022-05-27-hello-world.md
├── _sass
│   └── main.scss
├── about.md
├── assets
│   ├── css
│   │   └── main.scss
│   └── images
│       └── favicon.ico
└── index.md
```
I will at least attempt to document the changes I make to the actual blog in the form of blog posts. I will also attempt at keeping posts short, so I'm signing off now. 