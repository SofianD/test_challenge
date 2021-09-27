const { test, expect } = require('@jest/globals');

const User = require('../03');

describe('User', () => {
    test(
        'is sealed',
        () => {
            expect(Object.isSealed(User)).toBe(true);
        }
    )

    test(
        'greet() returns "hello " + User.name',
        () => {
            expect(User.greet()).toBe(`hello ${User.name}`)
        }
    )
})
