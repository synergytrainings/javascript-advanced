function calculate(operand1, operand2, operator) {
	'use strict';
	switch (operator) {
		case Operator.ADD:
			return operand1 + operand2;
		case Operator.SUBSTRACT:
			return operand1 - operand2;
		case Operator.MULTIPLY:
			return operand1 * operand2;
		case Operator.DIVIDE:
			return operand1 / operand2;
		default:
			throw Error('Unknown operator ' + operator);
	}
}