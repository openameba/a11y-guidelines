const DIR = "/a11y-guidelines";

module.exports = function (eleventyConfig) {
  return {
    dir: DIR,
    baseURL:
      process.env.NODE_ENV === "production"
        ? `https://openameba.github.io${DIR}`
        : `http://localhost:3000${DIR}`,
    title: "Ameba Accessibility Guidelines",
    description:
      "Ameba Accessibility Guidelinesは、Amebaのサービスのアクセシビリティを高めるために設けた制作指針集である。「誰もがいつでも迷わずコンテンツを楽しむことができる」ようにするため、WCAG 2.1を要約・和訳し、事例などを掲載している。",
    lang: "ja",
  };
};
