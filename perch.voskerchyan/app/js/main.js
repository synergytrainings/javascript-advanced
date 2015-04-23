function calculate(expression) {
	return eval(expression);
}


$(document).ready(function(){

	var input = $("#input");
	var expression;

	$(".btn:not(.btn-success)").click(function(){
		expression = input.val() + $(this).text();
		$("#input").val(expression);
	});

	$(".btn-success").click(function(){
		$("#input").val(calculate(expression));
	});
	
});