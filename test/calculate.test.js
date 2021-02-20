const assert = require('assert');
const calculation = require('../build/libs/calculate');

describe('Validate Calculate', () => {
    it('Should be 7', () => {
        assert.equal(calculation.validateNumber(7), 7);
    });
    it('Should be Music (9)', () => {
        assert.equal(calculation.validateNumber(9),'Music');
    });
    it('Should be Musical (15)', () => {
        assert.equal(calculation.validateNumber(15), 'Musical');
    });
    it('Should be TI (25)', () => {
        assert.equal(calculation.validateNumber(25), 'TI');
    });
    it('Should be 122', () => {
        assert.equal(calculation.validateNumber(122), 122);
    });
    it('Should be Music (117)', () => {
        assert.equal(calculation.validateNumber(117),'Music');
    });
    it('Should be Musical (165)', () => {
        assert.equal(calculation.validateNumber(165), 'Musical');
    });
    it('Should be TI (185)', () => {
        assert.equal(calculation.validateNumber(185), 'TI');
    });
});