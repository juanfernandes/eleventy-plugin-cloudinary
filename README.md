# `{% cloudinaryImage %}`

## What does it do?

Allows you to add an image from your cloudinary account using a shortcode.

Turns the [config](https://www.11ty.io/docs/config/) like this:

```javascript
  eleventyConfig.cloudinaryCloudName = 'cloud-name-here'
  eleventyConfig.addShortcode('cloudinaryImage', function (path, transforms, alt) {
    return `<img src="https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/${transforms}/${path}" alt="${alt}">`
  })
```

and [shortcodes](https://www.11ty.io/docs/shortcodes/) like this:

```nunjucks
{% cloudinaryImage
  "cat-photo.jpg",
  "f_auto",
  "Picture of a cat"
%}
```

into an `<img>` tag, like this:

```html
<img src="https://res.cloudinary.com/cloud-name-here/f_auto/cat-photo.jpg" alt="Picture of a cat">
```

## Installation

Copy the config above and open up your Eleventy config file (probably `.eleventy.js`) and then set your `cloudinaryCloudName`


Also! Make sure that the domains where you’ll be hosting your originals are whitelisted in your Cloudinary settings, under “Security » Allowed fetch domains”. Alternatively, leave the field blank, and Cloudinary will happily [`fetch`](https://cloudinary.com/documentation/fetch_remote_images#remote_image_fetch_url) from any domain.

## Usage

Use the following shortcode snippet in your Markdown file:

`{% cloudinaryImage "example-image.jpg", "w_320,f_auto", "example alt text" %}`
