define('CalculatorModel',['OperatorEnums'],function (operatorEnums){
    'use strict';
   var CalculatorModel=function(){
        this.operator=undefined;
        this.firstOperand=undefined;
        this.secondOperand=undefined;
        this.eventListener;
    };

    CalculatorModel.prototype={

        setEventListener : function(listener){
            this.eventListner=listener;
        },

        calculateValue :function(val){
            var opEnum = operatorEnums.Operatores;
            var t=this;
            if(this.isOperator(val)){
                if(val===opEnum.CLEAR){
                    this.reset(t);
                }else
                if(val===opEnum.EQUAL){
                    this.eventListner(this.calculate(this.firstOperand,this.secondOperand,this.operator));
                }else if(this.firstOperand!==undefined && this.secondOperand!==undefined){
                    this.firstOperand=this.calculate(this.firstOperand,this.secondOperand,this.operator);
                    this.secondOperand=undefined;
                    this.eventListner(this.firstOperand);
                    this.operator=val;
                }else{this.operator=val;}


            }else{
                if(this.firstOperand===undefined && this.secondOperand===undefined){
                    this.firstOperand=""+val;
                    this.eventListner(this.firstOperand);
                }else if(this.firstOperand!==undefined && this.operator===undefined){
                    this.firstOperand+=val;
                    this.eventListner(this.firstOperand);
                }else if(this.operator && this.secondOperand===undefined){
                    this.secondOperand=""+val;
                    this.eventListner(this.secondOperand);
                }else if(this.operator && this.secondOperand!==undefined){
                    this.secondOperand+=val;
                    this.eventListner(this.secondOperand);
                }
            }

        },
        isOperator:function(item){
            var opEnum = operatorEnums.Operatores;
            for(var key in opEnum){
                if(""+opEnum[key]===item){
                    return true;
                }
            }
            return false;
        },

        reset:function(t){
            t.operator=undefined;
            t.firstOperand=undefined;
            t.secondOperand=undefined;
            t.eventListner("");
        },

        calculate:function(operand1, operand2, operator) {
            var opEnum = operatorEnums.Operatores;
            switch(operator)
            {
                case opEnum.PLUS :return parseFloat(operand1)+parseFloat(operand2);
                case opEnum.MINUS :return parseFloat(operand1)-parseFloat(operand2);
                case opEnum.MULTIPLE :return parseFloat(operand1)*parseFloat(operand2);
                case opEnum.DIVIDE :return parseFloat(operand1)/parseFloat(operand2);
                default : throw new Error("Invalid operator" + operator) ;
            }
        }
    };

    return CalculatorModel;
});

//
//
//
///**
// * Created by Emil on 5/2/2015.
// */
///**
// * @namespace
// */
//var com = com || {};
///**
// * @namespace
// */
//com.emil = com.emil || {};
///**
// * @namespace
// */
//com.emil.calculator = com.emil.calculator || {};
///**
// * @namespace
// */
//com.emil.calculator.model = com.emil.calculator.model || {};
//
//com.emil.calculator.model.CalculatorModel=function(){
//    "use strict";
//    this.operator=undefined;
//    this.firstOperand=undefined;
//    this.secondOperand=undefined;
//    this.eventListener;
//};
//
//com.emil.calculator.model.CalculatorModel.prototype={
//
//    setEventListener : function(listener){
//        "use strict";
//        this.eventListner=listener;
//    },
//
//    calculateValue :function(val){
//        "use strict";
//        var opEnum = com.emil.calculator.enums.Operatores;
//        var t=this;
//
//        if(this.isOperator(val)){
//            if(val===opEnum.CLEAR){
//                this.reset(t);
//            }else
//            if(val===opEnum.EQUAL){
//                this.eventListner(this.calculate(this.firstOperand,this.secondOperand,this.operator));
//            }else if(this.firstOperand!==undefined && this.secondOperand!==undefined){
//                this.firstOperand=this.calculate(this.firstOperand,this.secondOperand,this.operator);
//                this.secondOperand=undefined;
//                this.eventListner(this.firstOperand);
//                this.operator=val;
//            }else{this.operator=val;}
//
//
//        }else{
//            if(this.firstOperand===undefined && this.secondOperand===undefined){
//                this.firstOperand=""+val;
//                this.eventListner(this.firstOperand);
//            }else if(this.firstOperand!==undefined && this.operator===undefined){
//                this.firstOperand+=val;
//                this.eventListner(this.firstOperand);
//            }else if(this.operator && this.secondOperand===undefined){
//                this.secondOperand=""+val;
//                this.eventListner(this.secondOperand);
//            }else if(this.operator && this.secondOperand!==undefined){
//                this.secondOperand+=val;
//                this.eventListner(this.secondOperand);
//            }
//        }
//
//    },
//    isOperator:function(item){
//        "use strict";
//        var opEnum = com.emil.calculator.enums.Operatores;
//        for(var key in opEnum){
//            if(""+opEnum[key]===item){
//                return true;
//            }
//        }
//        return false;
//    },
//
//    reset:function(t){
//        "use strict";
//        t.operator=undefined;
//        t.firstOperand=undefined;
//        t.secondOperand=undefined;
//        t.eventListner("");
//    },
//
//    calculate:function(operand1, operand2, operator) {
//    "use strict";
//        var opEnum = com.emil.calculator.enums.Operatores;
//    switch(operator)
//    {
//        case opEnum.PLUS :return parseFloat(operand1)+parseFloat(operand2);
//        case opEnum.MINUS :return parseFloat(operand1)-parseFloat(operand2);
//        case opEnum.MULTIPLE :return parseFloat(operand1)*parseFloat(operand2);
//        case opEnum.DIVIDE :return parseFloat(operand1)/parseFloat(operand2);
//        default : throw new Error("Invalid operator" + operator) ;
//    }
//}
//};
