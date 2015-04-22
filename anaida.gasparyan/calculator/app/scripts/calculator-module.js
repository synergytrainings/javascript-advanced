define('calculator', [], function () {

	var Operator = Object.freeze({
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
	function calculate(operand1, operand2, operator){
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
    }

    return {
        calculate: calculate
    };
});