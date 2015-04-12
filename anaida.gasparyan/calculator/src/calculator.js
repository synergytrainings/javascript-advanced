/**
 * Do basic arithmetic calculations
 * 
 * @param  {[integer]} first operand
 * @param  {[integer]} second operand
 * @param  {[string]} arithmetic operator
 * @return {[integer]} calculated arithmetic expression resulr
 */
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