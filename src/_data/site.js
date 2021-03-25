module.exports = function (eleventyConfig) {
  return {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://a11y-guidelines.ameba.design'
        : 'http://localhost:3000',
    title: 'Ameba Accessibility Guidelines',
    description:
      'Ameba Accessibility Guidelinesは、Amebaのサービスのアクセシビリティを高めるために設けた制作指針集である。「誰もがいつでも迷わずコンテンツを楽しむことができる」ようにするため、WCAG 2.1を要約・和訳し、事例などを掲載している。',
    lang: 'ja',
  };
};
