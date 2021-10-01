const Vector = require('../02');

describe('Vector class', () => {
    it('is instantiated', () => {
        const vector = new Vector(1, 2, 3);
        expect(vector).toBeInstanceOf(Vector);
    });

    it('should be equal to new Vector(0, 0, 0) when it has no argument', () => {
        const vector = new Vector();
        const vector2 = new Vector(0, 0, 0);
        expect(vector).toBeInstanceOf(Vector);
        expect(vector).toEqual(vector2);
    });

    it('should throw if one argument or more are not a Number', () => {
        expect(() => new Vector('a', 2, 3)).toThrow('x must be a number');
        expect(() => new Vector(1, 'a', 3)).toThrow('y must be a number');
        expect(() => new Vector(1, 2, 'a')).toThrow('z must be a number');
    });
});

describe('Vector.add method', () => {
    it('should return {"x": 5, "y": 7, "z": 9} when vector(4, 5, 6) is added in vector(1, 2, 3)', () => {
        const vector = new Vector(1, 2, 3);
        const vector2 =  new Vector(4, 5, 6);
        const res = {
            "x": vector.x + vector2.x,
            "y": vector.y + vector2.y,
            "z": vector.z + vector2.z
        }
        vector.add(vector2);
        expect(vector).toEqual(res);
    })

    it('should only accept Vector instances', () => {
            const vector = new Vector(1, 2, 3);
            const notVector = {"x": 1, "y": 2, "z": 3};
            expect(() => vector.add(notVector)).toThrow('vec must be an instanceof Vector');
        }
    )
})

describe('Vector.toJSON', () => {
    it('should return {"x": 1, "y": 2, "z": 3} for a vector(1, 2, 3)', () => {
        const vector = new Vector(1, 2, 3);
        expect(vector.toJSON()).toEqual({"x": 1, "y": 2, "z": 3});
    })
})
