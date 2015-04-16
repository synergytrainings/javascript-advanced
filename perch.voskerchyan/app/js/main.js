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

var num1 = 9;
var num2 = 8;
var opr = '/';

var result = calc(num1, num2, opr);
var message = "The result of " + num1 + " " + opr + " " + num2 + " = " + result;

$(document).ready(function(){
	$(".result").text(message);
});
