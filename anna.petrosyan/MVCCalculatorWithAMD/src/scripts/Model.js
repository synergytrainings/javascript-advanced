/*global define*/
define('Model',['Operators','Numbers'],function(Operators,Numbers){
    "use strict";
    var Model=function(){
    };
    Model.prototype= {
        /**
         * Initializing calculator Model.
         */
        init: function () {

        },
        /**
         * Processing  calculator button click operation.
         */
        processClick:function(key){
            if ( key in Numbers) {
                this.setOperand(Numbers[key]);
            }
            if (key in Operators) {
                this.operate( Operators[key]);
            }
        },
        /**
         * Setting change listener
         */
        setChangeListener: function(changeListener){
            this.changeListener=changeListener;
        },
        /**
         * Processing  calculator button click operation when button is number.
         */
        setOperand: function (num) {

            if (this.operand1 === undefined) {
                this.operand1 = "" + num;
                this.result=this.operand1;
            }
            else if (this.operand2 === undefined && this.operation === undefined) {
                this.operand1 += "" + num;
                this.result=this.operand1;
            }
            else if (this.operand1 !== undefined && this.operand2 === undefined ) {
                this.operand2 = "" + num;
                this.result=this.operand2;
            }
            else if (this.operand1 !== undefined && this.operand2 !== undefined) {
                this.operand2 += "" + num;
                this.result=this.operand2;
            }

            this.changeListener(this.result);
        },
        /**
         * Processing  calculator button click operation when button is arithmetic operation.
         */
        operate: function (op) {
            switch (op) {
                case Operators.CE:
                    this.init();
                    this.changeListener(this.result);
                    break;
                case Operators.BACKSPACE:
                    if (this.operand2 !== undefined) {
                        this.operand2 = this.operand2.length > 1 ? this.operand2.slice(0, -1) : 0;
                        this.result=this.operand2;
                    }
                    else if (this.operand1 !== undefined) {
                        this.operand1 = this.operand1.length > 1 ? this.operand1.slice(0, -1) : 0;
                        this.result=this.operand1;
                    }
                    this.changeListener(this.result);
                    break;

                case Operators.EQUALS:
                    if (this.operand1  && this.operand2 && this.operation ) {
                        this.result = this.calculate(this.operand1, this.operand2, this.operation);
                        this.operand1=undefined;
                        this.operand2=undefined;

                    }
                    this.changeListener(this.result);
                    this.init();
                    break;
                case Operators.SUBSTRACT:
                case Operators.MULTIPLY:
                case Operators.DIVIDE:
                case Operators.SUM:
                    if (this.operand1 !== undefined && this.operand2 !== undefined) {
                        if (this.operation !== undefined) {
                            this.result = this.calculate(this.operand1, this.operand2, this.operation);
                        }
                        else {
                            this.result = this.calculate(this.operand1, this.operand2, op);
                        }
                        this.operand1 = this.result;
                        this.operand2 = undefined;
                        this.operation = op;
                    }
                    else if(this.operand1 !== undefined) {
                        this.operation = op;
                    }
                    this.changeListener(this.result)  ;
            }

        },
        /**
         * Arithmetic operations
         */
        calculate: function (operand1, operand2, operator) {

            switch (operator) {
                case Operators.SUM:
                    return Number(operand1) + Number(operand2);
                case Operators.SUBSTRACT:
                    return Number(operand1) - Number(operand2);
                case Operators.MULTIPLY:
                    return Number(operand1) * Number(operand2);
                case Operators.DIVIDE:
                    return +Number(operand1) / Number(operand2);
                default:
                    throw "Unknown operator " + operator;
            }
        }
    };
    return Model;
});

