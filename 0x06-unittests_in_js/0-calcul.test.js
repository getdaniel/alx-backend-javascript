const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounding two integer numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('rounding one integer and the other float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('rounding float numbers with one roundup', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('rounding float numbers with both roundup', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
