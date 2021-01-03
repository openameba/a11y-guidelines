/**
 * @param {string} sc
 * @returns {number}
 */
const scToNumberForCompare = (sc) => {
  const scForCompare = sc
    .split(".")
    .map((n) => n.padStart(4, "0"))
    .join("");
  return parseInt(scForCompare);
};

module.exports = scToNumberForCompare;
