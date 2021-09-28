const { test, expect } = require('@jest/globals');
const PCKG = require('../01');

describe('Add', () => {
    test(
        'works',
        () => {
            expect(PCKG.add(1, 5)).toBe(6);
        }
    )

    test(
        'works only with numbers',
        () => {
            expect(()=>{PCKG.add('a', 5)}).toThrow("a must be a number");
            expect(()=>{PCKG.add(1, 'b')}).toThrow("b must be a number");
        }
    )
})

describe('Calc_moy', () => {
    test('calc_moy works', () => {
        expect(PCKG.calc_moy([ 1, 2, 3])).toBe(2);
    });

    test('calc_moy working with array only', () => {
        expect(() => PCKG.calc_moy({arr: [ 1, 2, 3]})).toThrowError("nums must be an array!");
    });
});

describe('STATE object', () => {
    test(
        'is frozen',
        () => {
            expect(Object.isFrozen(PCKG.STATE)).toBe(true);
        }
    )
})