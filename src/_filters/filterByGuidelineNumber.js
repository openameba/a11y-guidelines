/**
 * @param {string} guidelineNumber
 * @return {[]}
 */
const filterByGuidelineNumber = (post, guidelineNumber) => {
  return post.filter((p) => p.data.number.startsWith(guidelineNumber));
};

module.exports = filterByGuidelineNumber;
