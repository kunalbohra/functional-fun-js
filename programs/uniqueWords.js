const { compose, setToList, listToSet } = require('../common/utils');
const {
  splitInWords,
  toUpper,
  removeNonAlpha
} = require('../common/stringUtils');

const getUniqueWords = compose(
  setToList,
  listToSet,
  splitInWords,
  toUpper,
  removeNonAlpha
);

module.exports = getUniqueWords;
