module.exports = (eleventyConfig) => {
  // Build setting
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // Render markdown settings
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownLib = markdownIt({
    html: true,
    linkify: false,
  }).use(markdownItAnchor, { permalink: false });

  eleventyConfig.setLibrary("md", markdownLib);

  // Serve setting
  eleventyConfig.addWatchTarget("./src/styles");

  eleventyConfig.setBrowserSyncConfig({
    server: "public",
    port: "3000",
    startPath: "/a11y-guidelines",
  });

  // Filters
  const filterByGuidelineNumber = require("./src/_filters/filterByGuidelineNumber");
  eleventyConfig.addFilter("filterByGuidelineNumber", filterByGuidelineNumber);

  const scNumberToPath = require("./src/_filters/scNumberToPath");
  eleventyConfig.addFilter("scNumberToPath", scNumberToPath);

  // ShortCodes
  const labelShortCode = require("./src/_shortcodes/label");
  eleventyConfig.addPairedShortcode("label", labelShortCode);

  const scToNumberForCompare = require("./src/_utils/scToNumberForCompare");

  // Collections
  eleventyConfig.addCollection("SC", (collectionApi) => {
    const SC = collectionApi.getFilteredByTag("sc").sort((a, b) => {
      return (
        scToNumberForCompare(a.data.number) -
        scToNumberForCompare(b.data.number)
      );
    });
    return SC;
  });

  return {
    dir: {
      input: "src",
      output:
        process.env.NODE_ENV === "production"
          ? "public"
          : "public/a11y-guidelines",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
  };
};
