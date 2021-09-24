const { test, expect } = require('@jest/globals');
const prox = require('../06')
describe('Proxy', () => {
    test(
        'get with good param returns value',
        () => {
            expect(prox.foo).toBe(10**2)
        }
    )

    test(
        'get with bad param throw an error',
        () => {
            expect(() => {return prox.bar}).toThrow('Unknown property bar in target object!')
        }
    )
    
    test(
        'set with good aruments',
        () => {
            prox.bar = 5
            expect(prox.bar).toBe(5**2)
        }
    )

    test(
        'set with bad aruments',
        () => {
            expect(() => {
                return prox.bar = 'foo'
            }).toThrow("value must be a number")
        }
    )
})
