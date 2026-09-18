/**
 * 実装例の良し悪しラベル。
 * 色とアイコンに加えて文言でも良し悪しが伝わるよう日本語表記にする(1.4.1)
 *
 * @param {string} content
 * @param {string} label
 * @returns {string}
 */
const labelText = {
  good: '良い実装例',
  bad: '悪い実装例',
};

const label = (content, label) => {
  return `<span class="RuleLabel RuleLabel--${label}">${labelText[label] ?? label}</span>${content}`;
};

module.exports = label;
