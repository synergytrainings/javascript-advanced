describe('JavaScript test Jasmine', function () {
    it('test calculate', function () {
	var model = new com.synergy.jstraining.calculator.model.Model();
	model.init();
        expect(model.calculate(2, 3, '+')).toEqual(5);
        expect(model.calculate(6, 3, '-')).toEqual(3);
        expect(model.calculate(2, 3, '*')).toEqual(6);
        expect(model.calculate(6, 3, '/')).toEqual(2);
		expect(function(){calculate(6, 3, '&')}).toThrow();
    });
});