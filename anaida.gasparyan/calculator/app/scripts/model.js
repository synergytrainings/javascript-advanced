
var com = typeof com === "undefined" ? {} : com;
com.synisys = com.synisys || {};
com.synisys.trainings = com.synisys.trainings || {};
com.synisys.trainings.calculator = com.synisys.trainings.calculator || {};

com.synisys.trainings.calculator.initCalc = function($container) {
	var leftOperand = '',
		rightOperand = '',
		operator;

	updateResult('0');

	$(".digit", $container).click(function() {
		if (!operator) {
			leftOperand += $(this).text();
			updateResult(leftOperand);
		} else {
			rightOperand += $(this).text();
			updateResult(rightOperand);
		}
    });

   	$(".eval", $container).click(function(){
    	$('.operator', $container).removeClass('active');

        if (operator) {
        	rightOperand = rightOperand || leftOperand;
        	evaluate();
        }
    });

    $(".operator", $container).click(function(){
    	$('.operator', $container).removeClass('active');
    	$(this).addClass('active');

        if (!rightOperand) {
        	operator = $(this).data('val');
        } else {
        	evaluate();
        }

    });

    function evaluate() {
    	leftOperand = com.synisys.trainings.calculator.calculate(leftOperand, rightOperand, operator);
    	rightOperand = '';
    	operator = '';
    	updateResult(leftOperand);
    }

    function updateResult(value) {
    	$(".result", $container).text(value);
    }
};