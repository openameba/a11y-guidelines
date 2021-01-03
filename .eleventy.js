module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  eleventyConfig.addWatchTarget("./src/styles");

  eleventyConfig.setBrowserSyncConfig({
    server: "public",
    port: "3000",
    startPath: "/a11y-guidelines",
  });

  const filterByGuidelineNumber = require("./src/_filters/filterByGuidelineNumber");
  eleventyConfig.addFilter("filterByGuidelineNumber", filterByGuidelineNumber);

  const scNumberToPath = require("./src/_filters/scNumberToPath");
  eleventyConfig.addFilter("scNumberToPath", scNumberToPath);

  const labelShortCode = require("./src/_shortcodes/label");
  eleventyConfig.addPairedShortcode("label", labelShortCode);

  const scToNumberForCompare = require("./src/_utils/scToNumberForCompare");

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
