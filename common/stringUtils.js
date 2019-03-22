const { compose, curry, head, tail } = require('./utils');

const toUpper = str => str.toUpperCase();

const toLower = str => str.toLowerCase();

const removeNonAlpha = str => str.replace(/[^a-z]/gi, ' ');

const splitInWords = str => str.trim().split(/\s+/);

const join = curry((delim, arr) => arr.join(delim));

const capitalizeFirstLetter = compose(
  toUpper,
  head
);
const lowerRest = compose(
  toLower,
  join(''),
  tail
);
const capitalizeString = str =>
  `${capitalizeFirstLetter(str)}${lowerRest(str)}`;

module.exports = {
  toLower,
  toUpper,
  removeNonAlpha,
  splitInWords,
  join,
  capitalizeString
};
