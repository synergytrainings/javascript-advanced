/* global define */
define(['OperationType'],function(OperationType){
	'use strict';
	return {
		MAX_CHAR : 8,
		MAX_NUMBER: Math.pow(10,8)-1,
		addDigit:function(value, digit){
			if((value+'').length === this.MAX_CHAR) {
				return value;
			}else{
				return +((value?value+'':'')+digit);
			}
		},
		trunc:function(value){
			return (value+'').slice(0, this.MAX_CHAR);
		},
		eval:function(op1, op, op2){
			var result = 0;
			switch(op){
			case OperationType.SUM:
				result = op1+op2;
				break;
			case OperationType.SUB:
				result = op1-op2;
				break;
			case OperationType.MUL:
				result = op1*op2;
				break;
			case OperationType.DIV:
				result = op1/op2;
				break;
			default:
				throw 'Unknown "'+op+'" operation!';
			}
			return result;
		}
	};
});