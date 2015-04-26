define(['CalculatorMath','OperationType'],function(CalculatorMath, OperationType){
	describe('CalculatorMath tests',function(){

		it('should do sum',function(){
			expect(CalculatorMath.eval(1,OperationType.SUM,2)).toEqual(3);
		});

		it('should do subtraction',function(){
			expect(CalculatorMath.eval(1,OperationType.SUB,2)).toEqual(-1);
		});

		it('should do multiplication',function(){
			expect(CalculatorMath.eval(12345679,OperationType.MUL,9)).toEqual(111111111);
		});

		it('should do division',function(){
			expect(CalculatorMath.eval(1,OperationType.DIV,2)).toEqual(0.5);
		});

		it('should throw exception',function(){
			expect(function(){
				CalculatorMath.eval(1,OperationType.POINT,2);
			}).toThrow();
		});

		it('should check MAX_CHAR and MAX_NUMBER relation',function(){
			expect(CalculatorMath.MAX_NUMBER).toEqual(Math.pow(10,CalculatorMath.MAX_CHAR)-1);
		});

		it('should add digits after number if has small number of digits',function(){
			expect( CalculatorMath.addDigit(1525,'5')).toEqual(15255);
			expect( CalculatorMath.addDigit(1525,'.')).toEqual(1525);
		});

		it('should not add digits after number if limits are met',function(){
			var num = CalculatorMath.MAX_NUMBER;
			expect( CalculatorMath.addDigit(num,'5')).toEqual(num);
		});

		it('should truncate digits if limits are met',function(){
			var num = CalculatorMath.MAX_NUMBER;
			expect(CalculatorMath.trunc(num+'5')).toEqual(''+num);
		});

	});
});