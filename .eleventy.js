module.exports = (eleventyConfig) => {
  // Build setting
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/.nojekyll');

  // Render markdown settings
  const markdownIt = require('markdown-it');
  const markdownItAnchor = require('markdown-it-anchor');
  const markdownLib = markdownIt({
    html: true,
    linkify: false,
  }).use(markdownItAnchor, {
    level: [1, 2, 3],
    tabIndex: false,
    permalink: markdownItAnchor.permalink.headerLink({
      safariReaderFix: true,
    }),
  });

  eleventyConfig.setLibrary('md', markdownLib);

  // Serve setting
  eleventyConfig.addWatchTarget('./src/styles');

  eleventyConfig.setServerOptions({
    port: '3000',
  });

  // Filters
  const filterByGuidelineNumber = require('./src/_filters/filterByGuidelineNumber');
  eleventyConfig.addFilter('filterByGuidelineNumber', filterByGuidelineNumber);

  const scNumberToPath = require('./src/_filters/scNumberToPath');
  eleventyConfig.addFilter('scNumberToPath', scNumberToPath);

  // ShortCodes
  const labelShortCode = require('./src/_shortcodes/label');
  eleventyConfig.addPairedShortcode('label', labelShortCode);

  const scToNumberForCompare = require('./src/_utils/scToNumberForCompare');

  // Collections
  eleventyConfig.addCollection('SC', (collectionApi) => {
    const SC = collectionApi.getFilteredByTag('sc').sort((a, b) => {
      return (
        scToNumberForCompare(a.data.number) -
        scToNumberForCompare(b.data.number)
      );
    });
    return SC;
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
  };
};
