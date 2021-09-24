const { test, expect } = require('@jest/globals');

const Vector = require('../02');

describe('Create new class', () => {
    test('with good entries', () => {
        const okok = new Vector(1, 2, 3);
        // console.log(okok);
        expect(okok).toEqual({"x": 1, "y": 2, "z": 3});
    });
    test('with bad entries', () => {
        expect(() => {return new Vector('a', 2, 3)}).toThrow('x must be a number');
    });
});

describe('Test add function', () => {
    test(
        'with good entry',
        () => {
            const vector1 =  new Vector();
            const vector2 =  new Vector(1, 2, 3);
            vector1.add(vector2);
            expect(vector1).toEqual(vector2)
        }
    )

    test(
        'with bad entry',
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

describe('Test toJSON function', () => {
    test(
        '',
        () => {
            expect((new Vector()).toJSON()).toEqual({"x": 0, "y": 0, "z": 0})
        }
    )
})
