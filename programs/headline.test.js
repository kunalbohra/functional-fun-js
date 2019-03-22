const headline = require('./headline');

describe('headline', () => {
  test('headline', () => {
    console.log(typeof headline);
    expect(headline('The great buddha jumped over tHE WaLl')).toEqual(
      'The Great Buddha Jumped Over The Wall'
    );
  });
});
