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

com.synergy.jstraining.buildCalculator = function() {

	var op1 = 0;
	var op2 = 0;
	var operand = null;

	var values = [ '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*',
			'0', 'C', '=', '/' ];
	values.forEach(function(value, index) {
		var divIndex = Math.floor(index / 4);
		if (index % 4 == 0) {
			var $div = $("<div>", {
				id : "div-" + divIndex,
				class : "row"
			});
			$(".container").append($div);
		}
		var $columnDiv = $("<div>", {
			id : "value_" + value,
			class : "col-sm-3 cell"
		});
		$columnDiv.html(value);
		$columnDiv.bind('click.calculator', handleCalculateClick);
		$columnDiv.appendTo($("#div-" + divIndex));
	});

	function handleCalculateClick(event) {
		var result = 0;
		var previous = $('#result').val();
		var valueStr = event.target.id.replace('value_', '');
		var value = +(valueStr);
		if (valueStr === 'C') {
			op1 = 0;
			op2 = 0;
			operand = null;
			$('#result').val(op1);
			return;
		}
		if (!isNaN(value)) {
			result = previous * 10 + value;
			if (!operand) {
				op1 = op1*10+value;
				$('#result').val(op1);
			} else {
				op2 = op2*10+value;
				$('#result').val(op2);
			}
			
		} else {
			if (valueStr != '=') {
				operand = valueStr;
				result = calculate(op1, op2, operand);
			} else {
				result = calculate(op1, op2, operand)
				operand = null;
			}
			$('#result').val(result);
			op1 = result;
			op2 = 0;
		}
	}
	;

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
	function calculate(operand1, operand2, operator) {

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
	;

};
