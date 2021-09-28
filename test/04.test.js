const { test, expect } = require('@jest/globals');

const calc = require('../04');

describe('Calc methods', () => {
    test(
        'action ADD works',
        () => {
            expect(calc('add', 1, 3)).toBe(4)
        }
    )
    test(
        'action MUL works',
        () => {
            expect(calc('mul', 2, 3)).toBe(6)
        }
    )
    test(
        'action SUB works',
        () => {
            expect(calc('sub', 3, 1)).toBe(2)
        }
    )

    test(
        'throw an error if the given argument is unknown',
        () => {
            expect(()=>{ return calc(null, 1, 2)}).toThrow(`Unknown action 'null'`);
        }
    )
})
