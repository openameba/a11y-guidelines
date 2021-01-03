/**
 * @param {string} scNumber
 * @returns {string}
 */
const scNumberToPath = (scNumber) => {
  return scNumber.replace(/\./g, "/");
};

module.exports = scNumberToPath;
