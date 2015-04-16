function calc(number1, number2, operator) {
	var result;
	
	switch(operator) {
		case '+':
			result = number1 + number2;
		break;

		case '-':
			result = number1 - number2;
		break;

		case '*':
			result = number1 * number2;
		break;

		case '/':
			result = number1 / number2;
		break;
	}

	return result;
}

	var result = calc(num1, num2, opr);
	var massage = "The result of " + num1 + " " + opr + " " + num2 + " = " + result;