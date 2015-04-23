function calc(number1, number2, operator) {
	var result;
	
	switch(operator) {
		case '+':
			result = Number(number1) + Number(number2);
		break;

		case '-':
			result = Number(number1) - Number(number2);
		break;

		case '*':
			result = Number(number1) * Number(number2);
		break;

		case '/':
			result = Number(number1) / Number(number2);
		break;
	}

	return result;
}


$(document).ready(function(){

	var input = $("#input");
	var result = $("#result");
	var num1 = undefined;
	var num2 = undefined;
	var numlocal = undefined;
	var operator = undefined;

	$(".btn-default").click(function(){
		var numlocal = $(this).text();
		num2 = input.val() + numlocal;
		$("#input").val(num2);
	});

	$(".btn-info").click(function(){
		num1 = num2;
		operator = $(this).text();
		result.val(input.val() + operator);
		input.val("");
	});

	$(".btn-success").click(function(){
		result.val(calc(num1, num2, operator));
		input.val("");
		console.log(num1, num2, operator);
	});
});