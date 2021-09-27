const { test, expect } = require('@jest/globals');

const foo = require('../07')

describe('Foo', () => {
    test(
        'works',
        () => {
            const arr = [1, NaN, 5n, 0n]
            const gen = foo()
            arr.forEach((value) => {
                expect(gen.next().value).toEqual(value);
            })
        }
    )

    test(
        'works with string',
        () => {
            const gen = foo('foo')
            expect(gen.next().value).toEqual('1foo');
        }
    )
})
