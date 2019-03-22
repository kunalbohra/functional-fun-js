const uniqueWords = require('./uniqueWords');

describe('uniqueWords', () => {
  test('uniqueWords', () => {
    const GETTYSBURG_1_2 = `Four score and seven years ago
    our fathers brought forth on this continent,
    a new nation, conceived in Liberty, and dedicated to
    the proposition that all men are created equal.
    Now we are engaged in a great civil war, testing whether
    that nation, or any nation so conceived and dedicated,
    can long endure.`;

    expect(uniqueWords(GETTYSBURG_1_2)).toEqual([
      'A',
      'AGO',
      'ALL',
      'AND',
      'ANY',
      'ARE',
      'BROUGHT',
      'CAN',
      'CIVIL',
      'CONCEIVED',
      'CONTINENT',
      'CREATED',
      'DEDICATED',
      'ENDURE',
      'ENGAGED',
      'EQUAL',
      'FATHERS',
      'FORTH',
      'FOUR',
      'GREAT',
      'IN',
      'LIBERTY',
      'LONG',
      'MEN',
      'NATION',
      'NEW',
      'NOW',
      'ON',
      'OR',
      'OUR',
      'PROPOSITION',
      'SCORE',
      'SEVEN',
      'SO',
      'TESTING',
      'THAT',
      'THE',
      'THIS',
      'TO',
      'WAR',
      'WE',
      'WHETHER',
      'YEARS'
    ]);
  });
});
