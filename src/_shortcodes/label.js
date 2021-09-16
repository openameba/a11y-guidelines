const site = require('../_data/site')();

/**
 *
 * @param {string} content
 * @param {string} label
 * @returns {string}
 */
const label = (content, label) => {
  return `<span class="RuleLabel RuleLabel--${label}">${
    label.charAt(0).toUpperCase() + label.slice(1)
  }</span>${content}`;
};

module.exports = label;
