const site = require("../_data/site")();

/**
 *
 * @param {string} content
 * @param {string} label
 * @returns {string}
 */
const label = (content, label) => {
  return `<span class="RuleLabel RuleLabel--${label}">
<img src="${site.dir}/img/icon/${label}.svg" width="24" height="24" alt="" />
${label.charAt(0).toUpperCase() + label.slice(1)}
</span>${content}`;
};

module.exports = label;
