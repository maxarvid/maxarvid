---
layout: posts
image: 'https://images.maxarvid.com/2022-05-27-max_128.jpg'
image_alt: 'A picture of me on a bicycle'
---

# About Images

Even though the site still looks like crap, I'm inclined to prioritize putting up some pictures before tackling any styling. Inspired by what [MacWright wrote](https://macwright.com/2019/02/28/photos.html) about not using social media for his photos back in 2019, I decided to go down the same route for hosting images via AWS S3 and Cloudfront. Following his setup, as well as the steps in [this](https://learnetto.com/blog/cloudfront-s3) Learnetto tutorial allows me to sidestep the unpleasantries of using Netlify's LFS equivalent and will hopefully make it easy to migrate one day in order to explore other offerings.

To be honest, this was a bit of a pain to set up. In broad strokes it involved opening up the S3 bucket and pairing it to Cloudfront. I of course wanted to use my own subdomain and this required involving AWS's Certificate Manager, which in turn needed a couple (2) CNAME records on Google Domain's DNS settings.

Then it was time to incorporate an image to posts (and maybe the about section). Before the `_layouts/posts.html` looked like this:
```html
{% raw %}
<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>{{ site.title }}</title>
    <link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
    <link rel="shortcut icon" href="{{"/assets/images/favicon.ico" | relative_url }}" type="image/x-icon">
  </head>
  <body>
    {% include navigation.html %}
    {{ content }}
  </body>
</html>
```
I went ahead and threw in an `img` tag with a dynamically rendered source as follows:
```html
  <body>
    {% include navigation.html %}
    <img src={{ page.image }} alt="">
    {{ content }}
  </body>
```
{% endraw %}
So now I can display images that I host myself (sort of). Next stop the styling has to be at least... looked at. And I've been messing around with [tailwind](https://tailwindcss.com/), so I think that will be the road to take for this little page.