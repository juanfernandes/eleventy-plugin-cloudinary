module.exports = function (eleventyConfig, pluginNamespace) {
  eleventyConfig.namespace(pluginNamespace, () => {
    eleventyConfig.addShortcode('cloudinaryImage', function (path, transforms, alt) {
      return `<img src="https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/${transforms}/${path}" alt="${alt}">`
    })
  })
}
