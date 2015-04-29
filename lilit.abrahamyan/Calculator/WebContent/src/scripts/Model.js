/**
 * @namespace
 */
var com = com || {};
/**
 * @namespace
 */
com.synergy = com.synergy || {};
/**
 * @namespace
 */
com.synergy.jstraining = com.synergy.jstraining || {};
/**
 * @namespace
 */
com.synergy.jstraining.calculator = com.synergy.jstraining.calculator || {};

/**
 * @namespace
 */
com.synergy.jstraining.calculator.model = com.synergy.jstraining.calculator.model || {};

/**
 * JS model for calculator implementation
 */
com.synergy.jstraining.calculator.model.Model = function() {
	var operand1;
	var operand2;
	var operation;
	var result = 0;
	var changeListener;
};

com.synergy.jstraining.calculator.model.Model.prototype = {
	init : function(){
		
	},
	
	setChangeListener : function(changeListener) {
		this.changeListener = changeListener;
	},
	
	recalculate : function(keyValue){
		if(this.isOperation(keyValue)) {
			this.operatorEntered(keyValue);
		} else {
			this.numberEntered(keyValue);
		}
		this.changeListener(this.result);
	},
	
	isOperation : function(keyValue){
		var operations = com.synergy.jstraining.calculator.enums.Operations;
		for (var key in operations) {
			if (operations[key] === keyValue) {
				return true;
			}
		}
		return false;
	},
	
	operatorEntered : function(keyValue){
		var operator = com.synergy.jstraining.calculator.enums.Operations;
		switch (keyValue) {
			case operator.EQUALS: 
				if (this.operand1 && this.operand2 && this.operator) {
					this.evaluate(this.operand1, this.operand2, this.operator);
				} else if (this.operand1 && this.operator){
					this.evaluate(this.operand1, this.operand1, this.operator);
				} else if (this.operand1){
					this.result = this.operand1;
				}
				break;
			case operator.CLEAR:
				this.resetCalculator();
				break;
			default:
				if (this.operand1 && this.operand2 && this.operator) {
					this.result = this.calculate(this.operand1, this.operand2, this.operator);
					this.operand1 = this.result;
					this.operand2 = null;
					this.operator = keyValue;
				} else if (this.operand1){
					this.operator = keyValue;
				}
		}
		
	},
	
	resetCalculator : function (){
		this.operand1 = null;
		this.operand2 = null;
		this.operator = null;
		this.result = null;
	},
	
	evaluate : function (op1, op2, operator){
		this.result = this.calculate(op1, op2, operator);
		this.operand1 = this.result;
		this.operand2 = null;
		this.operator = null;
	},
	
	numberEntered : function(keyValue){
		var numericValue = +keyValue;
		if (this.operand1 && this.operand2 && this.operator){
			this.operand2 = this.operand2*10 + numericValue;
			this.result = this.operand2;
		} else if (this.operand1 && this.operator) {
			this.operand2 = numericValue;
			this.result = this.operand2;
		} else if (this.operand1) {
			this.operand1 = this.operand1 *10 + numericValue; 
			this.result = this.operand1;
		} else {
			this.operand1 = numericValue; 
			this.result = this.operand1;
		}
	},
	
	/**
	 * Calculate methods
	 * 
	 * @param operand1
	 *            first operand
	 * @param operand2
	 *            second operand
	 * @param operator
	 *            operator to apply for operands
	 * 
	 */
	calculate : function (operand1, operand2, operator) {

		var result;

		switch (operator) {
		case '+':
			result = operand1 + operand2;
			break;
		case '-':
			result = operand1 - operand2;
			break;
		case '*':
			result = operand1 * operand2;
			break;
		case '/':
			result = operand1 / operand2;
			break;
		default:
			throw "Unsupported operation.";

		}
		return result;
	}
};