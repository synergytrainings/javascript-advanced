/**
 * Created by Emil on 4/12/2015.
 */

function calculate(operand1, operand2, operator) {

    "use strict";
    switch(operator)
    {
        case OperatorsEnum.PLUS :return parseFloat(operand1)+parseFloat(operand2);
        case OperatorsEnum.MINUS :return parseFloat(operand1)-parseFloat(operand2);
        case OperatorsEnum.MULTIPLE :return parseFloat(operand1)*parseFloat(operand2);
        case OperatorsEnum.DIVIDE :return parseFloat(operand1)/parseFloat(operand2);
        default : throw new Error("Invalid operator" + operator) ;
    }
}

var NumbersEnum = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT:8,
    NINE: 9,
    ZERO:0
};

var OperatorsEnum ={
    PLUS:"+",
    MINUS:"-",
    MULTIPLE:"*",
    DIVIDE: "/",
    EQUAL:"=",
    CLEAR:"clear"


};

var operator=undefined;
var operand1=undefined;
var operand2=undefined;

function initCalculator(){
    for(var key in NumbersEnum){
        $("#num"+NumbersEnum[key]).bind( "click",function(num){
            return function(){
                bindEvent(num, false)};}
        (NumbersEnum[key]));
    }
    for(var key in OperatorsEnum){
        $("#"+key.toLocaleLowerCase()).bind( "click",function(op){
            return function(){
                bindEvent(op, true)};}
        (OperatorsEnum[key]));
    }

}
function bindEvent(val, isOperator){
    if(isOperator){
        if(val==OperatorsEnum.CLEAR){
            reset();
        }else
        if(val==OperatorsEnum.EQUAL){
            $(".screen").html(calculate(operand1,operand2,operator));
        }else if(operand1!=undefined && operand2!=undefined){
            operand1=calculate(operand1,operand2,operator);
            operand2=undefined;
            $(".screen").html(operand1);
            operator=val;
        }else{operator=val;}


    }else{
        if(operand1==undefined && operator==undefined){
            operand1=""+val;
            $(".screen").html(operand1);
        }else if(operand1!=undefined && operator==undefined){
            operand1+=val;
            $(".screen").html(operand1);
        }else if(operator && operand2==undefined){
            operand2=""+val;
            $(".screen").html(operand2);
        }else if(operator && operand2!=undefined){
            operand2+=val;
            $(".screen").html(operand2);
        }

    }
    function reset(){
        $(".screen").html("");
        operand1=undefined;
        operand2=undefined;
        operator=undefined;
    }

}