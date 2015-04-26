define(['CalculatorModel','CalculatorMath','OperationType'],
	function(CalculatorModel, CalculatorMath, OperationType){
	describe('CalculatorModel tests',function(){
		var model;

		beforeEach(function(){
			model = new CalculatorModel();
		});

		it('should has init and dispose methods',function(){
			expect( model.init ).not.toBeUndefined();
			expect( model.dispose ).not.toBeUndefined();
		});

		it('should call listener on value changing',function(){
			var called = false;
			var listener = function(){
				called = true;
			};
			model.setChangeListener(listener);
			model.setValue(123);

			expect(called).toBe(true);
		});

		it('should set error flag correctly',function(){
			model.setValue(123);
			expect(model.hasError()).toBe(false);

			model.setValue(123,true);
			expect(model.hasError()).toBe(true);
		});


		it('should add digit on number operations',function(){
			model.reset_();

			model.applyOperation(5);
			expect(model.getValue()).toEqual(5);

			model.applyOperation(6);
			expect(model.getValue()).toEqual(56);
		});

		it('should add point',function(){
			model.reset_();

			model.applyOperation(0);
			model.applyOperation(OperationType.POINT);
			model.applyOperation(OperationType.POINT);
			expect(model.getValue()).toEqual('0.');
		});

		it('should do math',function(){
			var num1 = 2;
			var num2 = 7;
			var ops = OperationType.getOpKeys();

			ops.forEach(function(op){
				model.applyOperation(OperationType.RESET);
				model.applyOperation(num1);
				model.applyOperation(op);
				model.applyOperation(num2);
				model.applyOperation(OperationType.EQ);
				expect(model.getValue()).toEqual(CalculatorMath.trunc(eval(num1+op+num2)));
			});
		});

		it('should do throw on invalid operation',function(){
			model.applyOperation(OperationType.RESET);
			model.applyOperation(5);
			expect(function(){
				model.applyOperation('burund');
			}).toThrow();
		});
	});
});