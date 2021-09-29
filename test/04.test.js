const calc = require('../04');

describe('Calc methods', () => {
    test('action ADD with 1 and 3 as arg should return 4', () => {
        expect(calc('add', 1, 3)).toBe(4)
    })

    test('action MUL with 2 and 3 as arg should return 6', () => {
        expect(calc('mul', 2, 3)).toBe(6)
    })

    test('action SUB with 3 ans 1 as agr should return 2', () => {
        expect(calc('sub', 3, 1)).toBe(2)
    })

    test('should return 0 when there is only a valid action as arg', () => {
        const validActions = ['add', 'mul', 'sub'];
        for (const action of validActions) {
            expect(calc(action)).toBe(0);
        }
    })

    test('throw an error if the given argument is unknown', () => {
        expect(() => calc(null, 1, 2)).toThrow(`Unknown action 'null'`);
    })

})
