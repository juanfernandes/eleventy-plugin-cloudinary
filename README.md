# `{% cloudinaryImage %}`

An [Eleventy](https://www.11ty.dev/) shortcode that allows you to add an image from your cloudinary account.

## What does it do?
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

### Helpful
- Make sure that the domains where you’ll be hosting your originals are whitelisted in your Cloudinary settings, under “Security » Allowed fetch domains”. Alternatively, leave the field blank, and Cloudinary will happily [`fetch`](https://cloudinary.com/documentation/fetch_remote_images#remote_image_fetch_url) from any domain.
- Check out the [cloudinary documentation](https://cloudinary.com/documentation)
- Some useful default image transformations to consider
  - [Automatic format selection](https://cloudinary.com/documentation/image_transformations#automatic_format_selection)
  - [Resizing and cropping images](https://cloudinary.com/documentation/image_transformations#resizing_and_cropping_images)
  - [Adjusting image quality](https://cloudinary.com/documentation/image_transformations#adjusting_image_quality)

## Usage

Use the following shortcode snippet in your Markdown file:

`{% cloudinaryImage "sample.jpg", "w_320,f_auto", "Cloudinary Sample Image" %}`

<img src="https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_crop/sample.jpg" alt="Cloudinary Sameple Image">

## Todo
- add to npmjs.org and create install instructions
- setup fallback settings

## Thanks
- [@zachleat](https://twitter.com/zachleat) for creating the excellent [11ty](https://www.11ty.dev/)
- [@FrankTldr](https://twitter.com/FrankTldr) for pointing out what I was doing wrong and sending me tons of useful links
- [@hankchizljaw](https://twitter.com/hankchizljaw) for reviewing my first ever public repo
- [@etportis](https://twitter.com/etportis) for creating [respimg](https://github.com/eeeps/eleventy-respimg) which helped me create this
- [Cloudinary](https://cloudinary.com) - for creating such an awesome service
