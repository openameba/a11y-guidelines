module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  eleventyConfig.addWatchTarget("./src/styles");

  eleventyConfig.setBrowserSyncConfig({
    server: "public",
    port: "3000",
    startPath: "/a11y-guidelines"
  });

  /**
   * @param {string} guidelineNumber
   * @return {[]}
   */
  const filterByGuidelineNumber = (post, guidelineNumber) => {
    return post.filter(p => p.data.number.startsWith(guidelineNumber));
  }
  eleventyConfig.addFilter("filterByGuidelineNumber", filterByGuidelineNumber);

  /**
   * @param {string} scNumber
   * @returns {string}
   */
  const scNumberToPath = (scNumber) => {
    return scNumber.replace(/\./g, "/");
  }
  eleventyConfig.addFilter("scNumberToPath", scNumberToPath);

  return {
    dir: {
      input: "src",
      output:
        process.env.NODE_ENV === "production"
          ? "public"
          : "public/a11y-guidelines",
    },
    markdownTemplateEngine: "njk",
  };
};
