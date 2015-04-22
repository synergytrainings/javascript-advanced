
var com = typeof com === "undefined" ? {} : com;
com.synisys = com.synisys || {};
com.synisys.trainings = com.synisys.trainings || {};
com.synisys.trainings.calculator = com.synisys.trainings.calculator || {};

com.synisys.trainings.calculator.Operator = Object.freeze({
	ADD : '+', 
	SUBSTRACT: '-', 
	MULTIPLY : '*',
	DIVIDE : '/'
});

/**
 * Do basic arithmetic calculations
 * 
 * @param  {[Number]} first operand
 * @param  {[Number]} second operand
 * @param  {[String]} arithmetic operator
 * @return {[Number]} calculated arithmetic expression resulr
 */
com.synisys.trainings.calculator.calculate = function(operand1, operand2, operator){
	var Operator = com.synisys.trainings.calculator.Operator;
    switch (operator) {
		case Operator.ADD:
			return +operand1 + (+operand2);
		case Operator.SUBSTRACT:
			return operand1 - operand2;
		case Operator.MULTIPLY:
			return operand1 * operand2;
		case Operator.DIVIDE:
			return operand1 / operand2;
		default:
			throw 'Unknown operator ' + operator;
	}
};