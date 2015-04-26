/* global define */
define(['Calculator','CalculatorModel','CalculatorView'],
	function(Calculator,CalculatorModel, CalculatorView){
  'use strict';

  return {
    start : function( div ){
    	var calculator = new Calculator(
      		new CalculatorModel(), 
      		new CalculatorView()
      	);
      	calculator.init();
      	calculator.getElement().appendTo(div);
    }
  };
});
