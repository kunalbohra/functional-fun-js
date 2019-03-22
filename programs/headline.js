const { compose, map } = require('../common/utils');
const {
  splitInWords,
  capitalizeString,
  join
} = require('../common/stringUtils');

const headline = compose(
  join(' '),
  map(capitalizeString),
  splitInWords
);

module.exports = headline;
