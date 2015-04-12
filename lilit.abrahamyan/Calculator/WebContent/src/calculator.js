/**
 * 
 */

function calculate(operand1, operand2, operator) {
	var result;
	
	switch(operator) {
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
