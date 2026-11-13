// 達成基準番号から原則ラベルを導出する(パンくず用)
// 例: "2.4.7" → "2. 操作可能"
const PRINCIPLES = {
  1: '知覚可能',
  2: '操作可能',
  3: '理解可能',
  4: '堅牢性',
};

module.exports = function scNumberToPrincipleLabel(number) {
  const principle = String(number).split('.')[0];
  return `${principle}. ${PRINCIPLES[principle]}`;
};
