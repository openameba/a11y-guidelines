module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  eleventyConfig.addWatchTarget("./src/styles");

  eleventyConfig.setBrowserSyncConfig({
    server: "public",
    port: "3000"
  });

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
