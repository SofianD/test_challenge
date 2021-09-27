const { test, expect } = require('@jest/globals');

const Vector = require('../02');

describe('Vector class', () => {
    test('works', () => {
        const okok = new Vector(1, 2, 3);
        // console.log(okok);
        expect(okok).toEqual({"x": 1, "y": 2, "z": 3});
    });
    test('throw an error', () => {
        expect(() => {return new Vector('a', 2, 3)}).toThrow('x must be a number');
        expect(() => {return new Vector(1, 'a', 3)}).toThrow('y must be a number');
        expect(() => {return new Vector(1, 2, 'a')}).toThrow('z must be a number');
    });
});

describe('Vector.add', () => {
    test(
        'works',
        () => {
            const vector1 =  new Vector();
            const vector2 =  new Vector(1, 2, 3);
            vector1.add(vector2);
            expect(vector1).toEqual(vector2)
        }
    )

    test(
        'only accepts Vector instances',
        () => {
            const vector1 =  new Vector();
            const notVector = {"x": 1, "y": 2, "z": 3};

            expect(() => {
                return vector1.add(notVector)
            })
            .toThrow('vec must be an instanceof Vector')
        }
    )
})

describe('Vector.toJSON', () => {
    test(
        'works',
        () => {
            expect((new Vector()).toJSON()).toEqual({"x": 0, "y": 0, "z": 0})
        }
    )
})
