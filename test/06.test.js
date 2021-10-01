const prox = require('../06')

describe('Proxy', () => {
    test('should return 100 if the param is "foo"', () => {
        expect(prox.foo).toBe(10**2);
    })

    it('should throw if the param is unknown', () => {
        expect(() => prox.bar).toThrow('Unknown property bar in target object!')
    })
    
    it('should set bar param with 5 as value and return 25 when bar param is called', () => {
        prox.bar = 5;
        expect(prox.bar).toBe(5**2);
    })

    it('should throw when setting "bar" param without Number as value', () => {
        expect(() => prox.bar = 'foo').toThrow("value must be a number");
        expect(() => prox.bar = []).toThrow("value must be a number");
        expect(() => prox.bar = {}).toThrow("value must be a number");
        expect(() => prox.bar = true).toThrow("value must be a number");
    })
})
