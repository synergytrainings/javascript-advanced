/*global $:false */
/**
 * Defining namespace
 */
var petrosyan = typeof petrosyan === "undefined" ? {} : petrosyan;
petrosyan.anna = petrosyan.anna || {};
/**
 * Enum to store  operations
 */
petrosyan.anna.Operators = {
    SUM: "+",
    SUBSTRACT: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
    CE: "ce",
    EQUALS: "=",
    BACKSPACE: "backspace",
    percentage: "percentage"
};
/**
 * Enum to store numbers
 */

petrosyan.anna.NUMBERS = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9

};

/**
 * Binding action listeners to calculator buttons.Initializing calculator.
 */
$(document).ready(function () {
    "use strict";
    for (var key in petrosyan.anna.NUMBERS) {
        if(petrosyan.anna.NUMBERS.hasOwnProperty(key)) {
            petrosyan.anna.addEventListener(key.toLowerCase(), petrosyan.anna.NUMBERS[key], petrosyan.anna.setOperand);
        }

    }
    for (key in petrosyan.anna.Operators) {
        if(petrosyan.anna.Operators.hasOwnProperty(key)) {
            petrosyan.anna.addEventListener(key.toLowerCase(), petrosyan.anna.Operators[key], petrosyan.anna.operate);
        }

    }

    petrosyan.anna.init_calc();
});
/**
 * To bind event listener to a DOM item.
 * *
 * @param DOM item id
 * @param param of the click event listener function
 * @param name of the click event listener function
 */

petrosyan.anna.addEventListener = function (item1, item2, item3) {
    "use strict";
    $("#" + item1).click(function () {
        item3.call(this, item2);
    });

};
/**
 * To initialize calculator.Define global scope variables.
 */
petrosyan.anna.init_calc = function () {
    "use strict";
    petrosyan.anna.result = 0;
    petrosyan.anna.operand1 = undefined;
    petrosyan.anna.operand2 = undefined;
    petrosyan.anna.operation = undefined;
    $("#calc_result").val(0);
};
/**
 * Number buttons' click event listener function
 * @param number of the button
 */
petrosyan.anna.setOperand = function (num) {
//    "use strict";
//    var operand1=petrosyan.anna.operand1;
//    var operand2=petrosyan.anna.operand2;
//    var operation=petrosyan.anna.operation;
    "use strict";
    if(petrosyan.anna.operand1===undefined)
    {
        petrosyan.anna.operand1=""+num;
        $("#calc_result").val(petrosyan.anna.operand1);

    }
    else if(petrosyan.anna.operand1!==undefined && petrosyan.anna.operand2===undefined&& petrosyan.anna.operation===undefined)
    {
        petrosyan.anna.operand1+=""+num;
        $("#calc_result").val(petrosyan.anna.operand1);
    }
    else if(petrosyan.anna.operand1!==undefined && petrosyan.anna.operand2===undefined&& petrosyan.anna.operation!==undefined)
    {
        petrosyan.anna.operand2=""+num;
        $("#calc_result").val(petrosyan.anna.operand2);
    }
    else if(petrosyan.anna.operand1!==undefined && petrosyan.anna.operand2!==undefined)
    {
        petrosyan.anna.operand2+=""+num;
        $("#calc_result").val(petrosyan.anna.operand2);
    }


};
/**
 * Operation buttons' click event listener function
 * @param operation  of the button
 */
petrosyan.anna.operate = function (op) {
//    "use strict";
//    var operand1=petrosyan.anna.operand1;
//    var operand2=petrosyan.anna.operand2;
//    var operation=petrosyan.anna.operation;
//    var Operators=petrosyan.anna.Operators;
//    var result=petrosyan.anna.result;
    "use strict";
    switch (op) {
        case petrosyan.anna.Operators.CE:
            petrosyan.anna.init_calc();
            break;
        case petrosyan.anna.Operators.BACKSPACE:
            if(petrosyan.anna.operand2!==undefined ) {
                petrosyan.anna.operand2 = petrosyan.anna.operand2.length > 1 ? petrosyan.anna.operand2.slice(0, -1) : 0;
                $("#calc_result").val(petrosyan.anna.operand2);
            }
            else if(petrosyan.anna.operand1!==undefined)
            {
                petrosyan.anna.operand1 = petrosyan.anna.operand1.length > 1 ? petrosyan.anna.operand1.slice(0, -1) : 0;
                $("#calc_result").val(petrosyan.anna.operand1);
            }
            break;

        case petrosyan.anna.Operators.EQUALS:
            if (petrosyan.anna.operand1 !== undefined && petrosyan.anna.operand2 !== undefined && petrosyan.anna.operation!== undefined) {
                petrosyan.anna.result = petrosyan.anna.calculate(petrosyan.anna.operand1, petrosyan.anna.operand2, petrosyan.anna.operation);
                $("#calc_result").val(petrosyan.anna.result);
            }
            break;
        case petrosyan.anna.Operators.SUBSTRACT:
        case petrosyan.anna.Operators.MULTIPLY:
        case petrosyan.anna.Operators.DIVIDE:
        case petrosyan.anna.Operators.SUM:
            if (petrosyan.anna.operand1 !== undefined && petrosyan.anna.operand2 !== undefined) {
                if (petrosyan.anna.operation !== undefined) {
                    petrosyan.anna.result = petrosyan.anna.calculate(petrosyan.anna.operand1, petrosyan.anna.operand2, petrosyan.anna.operation);
                }
                else {
                    petrosyan.anna.result = petrosyan.anna.calculate(petrosyan.anna.operand1, petrosyan.anna.operand2, op);
                }
                petrosyan.anna.operand1 = petrosyan.anna.result;
                petrosyan.anna.operand2 = undefined;
                petrosyan.anna.operation = op;
                $("#calc_result").val(petrosyan.anna.result);
            }
            else {
                petrosyan.anna.operation = op;
            }
    }

};
/**
 * Arithmetic calculation.
 * @param first operand
 * @param second operand
 * @param arithmetic operator
 * @exception will be thrown when operator is not recognized(absent from Operators enum)
 */
petrosyan.anna.calculate = function (operand1,operand2, operator) {
    'use strict';
    switch (operator) {
        case petrosyan.anna.Operators.SUM:
            return Number(operand1) + Number(operand2);
        case petrosyan.anna.Operators.SUBSTRACT:
            return Number(operand1) - Number(operand2);
        case petrosyan.anna.Operators.MULTIPLY:
            return Number(operand1) * Number(operand2);
        case petrosyan.anna.Operators.DIVIDE:
            return +Number(operand1) / Number(operand2);
        default:
            throw "Unknown operator " + operator;
    }
};
