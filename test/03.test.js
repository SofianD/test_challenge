const User = require('../03');

describe('User', () => {
    it('is sealed', () => {
        expect(Object.isSealed(User)).toBe(true);
    })

    test('User.name should be "fraxken"', () => {
        expect(User.name).toBe("fraxken");
    })
})

describe('User.addProperty method', () => {
    it('should return false',() => {
        expect(User.addProperty()).toBe(false);
    })
})

describe('User.greet method', () => {
    it('should return "hello fraxken"',() => {
        const user = Object.seal({...User});
        expect(user.greet()).toEqual("hello fraxken");
    })
})

describe('User.callGreet param', () => {
    it('should return 0', () => {
        expect(User.callGreet).toBe(0);
    })

    it('should be incremented to 3 then go back to 0', () => {
        const user = Object.seal({...User});
        const values = [1, 2, 3, 0];
        for (const value of values) {
            user.greet();
            expect(user.callGreet).toBe(value)
        }
    })
})
