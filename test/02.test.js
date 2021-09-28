const { test, expect } = require('@jest/globals');

const Vector = require('../02');
const vector = new Vector(1, 2, 3);

describe('Vector class', () => {
    test('is instantiated', () => {
        expect(vector).toBeInstanceOf(Vector);
    });

    test('throw an error', () => {
        expect(() => {return new Vector('a', 2, 3)}).toThrow('x must be a number');
        expect(() => {return new Vector(1, 'a', 3)}).toThrow('y must be a number');
        expect(() => {return new Vector(1, 2, 'a')}).toThrow('z must be a number');
    });
});

describe('Vector.add method', () => {
    test(
        'works',
        () => {
            const vector2 =  new Vector(1, 2, 3);
            const res = {
                "x": vector.x + vector2.x,
                "y": vector.y + vector2.y,
                "z": vector.z + vector2.z
            }
            vector.add(vector2);
            expect(vector).toEqual(res);
        }
    )

    test(
        'only accepts Vector instances',
        () => {
            const notVector = {"x": 1, "y": 2, "z": 3};
            expect(() => {
                return vector.add(notVector)
            })
            .toThrow('vec must be an instanceof Vector');
        }
    )
})

describe('Vector.toJSON', () => {
    test(
        'works',
        () => {
            expect((new Vector()).toJSON()).toEqual({"x": 0, "y": 0, "z": 0});
        }
    )
})
