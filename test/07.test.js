const foo = require('../07')

describe('Foo', () => {
    it('should return each value one at a time from ["1bar", NaN, 5n, 0n] when foo() is called with "foo" as argument', () => {
        const arr = ['1bar', NaN, 5n, 0n];
        const gen = foo('bar');
        for (const value of arr) expect(gen.next().value).toEqual(value);
    })
    
    it('should return each value one at a time from [11, NaN, 5n, 0n] when foo() is called with 10 as argument', () => {
        const arr = [11, NaN, 5n, 0n];
        const gen = foo(10);
        for (const value of arr) expect(gen.next().value).toEqual(value);
    }
)
    it('should return 1 as first value when foo() is called without argument', () => {
        const arr = [1, NaN, 5n, 0n];
        const gen = foo();
        for (const value of arr) expect(gen.next().value).toEqual(value);
    })
})
