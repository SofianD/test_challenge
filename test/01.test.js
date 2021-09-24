const { test, expect } = require('@jest/globals');
const CODE = require('../01');

test('add 1 + 5 to equal 6', () => {
    expect(CODE.add(1, 5)).toBe(6);
});

describe('calc_moy', () => {
    test('calc_moy working', () => {
        const numbersArray = [ 1, 2, 3];
        expect(CODE.calc_moy(numbersArray)).toBe(2);
    });

    test('calc_moy working with array only', () => {
        const numbersArray = [ 1, 2, 3];
        expect(() => CODE.calc_moy({arr: [ 1, 2, 3]})).toThrowError("nums must be an array!");
    });
});