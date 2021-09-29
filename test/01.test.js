const PCKG = require('../01');

describe('Add', () => {
    it('should return 6 when arguments are 1 and 5', () => {
        expect(PCKG.add(1, 5)).toBe(6);
    })

    it('should return 11 when the single argument is 1', () => {
        expect(PCKG.add(1)).toBe(11);
    })

    it('should throw if arguments[0] is undefined', () => {
        expect(() => PCKG.add()).toThrow("a must be a number");
    })

    it('should throw if the arguments are not numbers', () => {
        expect(() => PCKG.add('a', 5)).toThrow("a must be a number");
        expect(() => PCKG.add(1, 'b')).toThrow("b must be a number");
    })
})

describe('Calc_moy', () => {
    it('should return 2 for 1, 2 and 3', () => {
        const arr = [ 1, 2, 3];
        expect(PCKG.calc_moy(arr)).toBe(2);
    });

    it('should return NaN if arguments[0] is missing', () => {
        expect(PCKG.calc_moy()).toBe(NaN);
    })

    it('should throw if argument is not an array', () => {
        expect(() => PCKG.calc_moy({})).toThrow("nums must be an array!");
        expect(() => PCKG.calc_moy('{}')).toThrow("nums must be an array!");
        expect(() => PCKG.calc_moy(32)).toThrow("nums must be an array!");
    });
});

describe('STATE object', () => {
    it('is frozen', () => {
            expect(Object.isFrozen(PCKG.STATE)).toBe(true);
    })
})