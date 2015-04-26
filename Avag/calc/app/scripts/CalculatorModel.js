/* global define */
define(['OperationType', 'CalculatorMath'],function(OperationType, CalculatorMath){
	'use strict';

	var CalculatorModel = function(){
		this.currentValue = 0;
		this.displayValue = '0';
		this.result = 0;
		this.operation = null;
		this.listener = null;
		this.error = false;
	};

	CalculatorModel.prototype = {
		constructor: CalculatorModel,
		init: function(){
		},
		dispose:function(){
		},
		setChangeListener:function(listener){
			this.listener = listener;
		},
		setValue : function(value, isError){
			this.displayValue = value;
			this.error = !!isError;
			if( this.listener ){
				this.listener(this.displayValue);
			}
		},
		getValue : function(){
			return this.displayValue;
		},
		getOperation:function(){
			return this.operation;
		},
		hasError:function(){
			return this.error;
		},
		applyOperation : function( opType ){
			if( ~OperationType.getDigitKeys().indexOf(opType+'') ){ //jshint ignore:line
				if( this.operation===OperationType.EQ ){	
					this.operation = null;
					this.currentValue = CalculatorMath.addDigit(0,opType);
				}else{
					this.currentValue = CalculatorMath.addDigit(this.currentValue,opType);	
				}					
				this.setValue(this.currentValue);
			}else 
			if( ~OperationType.getOpKeys().indexOf(opType+'') ){ //jshint ignore:line
				this.result = this.currentValue;
				this.currentValue = 0;
				this.operation = opType;
				this.setValue(this.result);
			}else
			if( OperationType.EQ === opType ){
				var tmpResult = CalculatorMath.eval(this.result,this.operation,this.currentValue);
				//Check: division to zero
				if( !isFinite(tmpResult) ){
					this.reset_();
					this.setValue('0', true);
				}
				//Check: maximum number limit exceeded
				else if( tmpResult > CalculatorMath.MAX_NUMBER ){
					this.reset_();
					this.setValue(CalculatorMath.trunc(tmpResult), true);
				}else{
					this.result = tmpResult;
					this.error = false;
					this.setValue(CalculatorMath.trunc(tmpResult));
				}

			}			
			else
			if( OperationType.POINT === opType ){
				var num = +(this.currentValue+'.');
				if( !isNaN(num) ){
					this.currentValue += '.';
					this.setValue(this.currentValue);
				}
			}	
			else
			if( OperationType.RESET === opType ){
				this.reset_();
				this.setValue(this.currentValue);
			}			
			else{
				throw 'Invalid operation "'+opType+'"';
			}
		},
		reset_:function(){
			this.operation = null;
			this.currentValue = 0;
			this.result = 0;
		}
	};
	return CalculatorModel;
});