/**
 * Created by Emil on 4/12/2015.
 */

function calculate(operand1, operand2, operator) {

    "use strict";
    switch(operator)
    {
        case "+" :return parseFloat(operand1)+parseFloat(operand2);
        case "-" :return parseFloat(operand1)-parseFloat(operand2);
        case "*" :return parseFloat(operand1)*parseFloat(operand2);
        case "/" :return parseFloat(operand1)/parseFloat(operand2);
        default : throw new Error("Invalid operator" + operator) ;
    }
}