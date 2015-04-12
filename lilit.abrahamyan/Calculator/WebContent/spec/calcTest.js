describe('JavaScript test Jasmine', function () {
    it('test calculate', function () {
        expect(calculate(2, 3, '+')).toEqual(5);
        expect(calculate(6, 3, '-')).toEqual(3);
        expect(calculate(2, 3, '*')).toEqual(6);
        expect(calculate(6, 3, '/')).toEqual(2);
		expect(function(){calculate(6, 3, '&')}).toThrow();
    });
});