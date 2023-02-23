const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
    it('Rounding two integer numbers',function() {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it('Rounding one integer and the other float', function() {
	assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('Rounding float numbers with one roundup', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('Rounding float numbers with both roundup', function() {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
});
