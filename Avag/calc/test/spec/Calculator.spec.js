/*define(['Calculator','CalculatorView','CalculatorModel'],
	function(Calculator, CalculatorView, CalculatorModel) {
	describe('Calculator tests',function(){
		var calc;
		var view;
		var model;
		beforeEach(function(){
			view = new CalculatorView();
			model = new CalculatorModel();
			calc = new Calculator(model,model);
		});
		it('should has same template as view',function(){
			expect(calc.getElement(), view.getElement());
		})
	});
});*/