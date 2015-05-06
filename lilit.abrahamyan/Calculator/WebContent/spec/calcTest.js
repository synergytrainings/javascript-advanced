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

    it('test isOperation', function () {
	var model = new com.synergy.jstraining.calculator.model.Model();
	model.init();
        expect(model.isOperation('+')).toEqual(true);
        expect(model.isOperation('-')).toEqual(true);
        expect(model.isOperation('*')).toEqual(true);
        expect(model.isOperation('5')).toEqual(false);
        expect(model.isOperation('8')).toEqual(false);
    });


  it('test operatorEntered numberEntered', function () {
	var model = new com.synergy.jstraining.calculator.model.Model();
	model.init();
	model.numberEntered(3);
	model.operatorEntered('+');
	model.numberEntered('9');
	model.operatorEntered('=');
        expect(model.result).toEqual(12);
    });

  it('test resetCalculator', function () {
	var model = new com.synergy.jstraining.calculator.model.Model();
	model.init();
	model.numberEntered(3);
	model.operatorEntered('+');
	model.numberEntered('9');
	model.operatorEntered('=');
        expect(model.result).toEqual(12);
	model.resetCalculator();
	expect(model.result).toEqual(null);
    });
});