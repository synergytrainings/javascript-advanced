define(['lib/calculator', 'OperationType'], function (calculator, OperationType) {
	"use strict";

	function Model() {
		this.leftOperand = undefined; 
		this.resetCurrValue = false;
		this.operator = undefined;
		this.currValue = '';
	}

	Model.prototype = {

		updateNumber: function (value) { 
			this.setCurrentValue(this.resetCurrValue ? value : (this.currValue + value));
			this.setResetCurrValue(false)
		},

		updateOperator: function (value) {
			if (this.leftOperand && this.operator) {
				this.calculate();
			} else {
				this.setLeftOperand(this.currValue);
				this.setResetCurrValue(true);
			}
			this.setOperator(value);
		},

		evaluate: function() {
			if (this.operator) { // do nothing if no operator
				this.calculate();
			}
		},

		calculate: function() {
			this.setCurrentValue(calculator.calculate(this.leftOperand, +this.currValue, this.operator));
			this.setOperator(undefined);
			this.setLeftOperand(this.currValue);
			this.setResetCurrValue(true);
		},

		setResetCurrValue: function(value) {
			this.resetCurrValue = value;
			console.log('Reset current value set to ' + this.resetCurrValue);
		},

		setLeftOperand: function(value) {
			this.leftOperand = +value;
			console.log('Left operand set to ' + this.leftOperand);
		},

		setCurrentValue: function(value) {
			if (value === '.') {
				value = '0.';
			}
			if (!isNaN(value)) {
				this.currValue = '' + value;
				console.log('Current value set to ' + this.currValue);
			}
		},

		setOperator: function(value) {
			this.operator = value;
			console.log('Operator set to ' + this.operator);
		},

		/**
		 * Updates calculator model by setting given value to right|left operand or operator
		 *
		 * @param  {[OperationType]} type 
		 *         operation type
		 * @param  {[String]} value
		 *         inserted symbol
		 */
		updateModel: function(type, value) {
			switch(type) {
				case OperationType.DIGIT:
					this.updateNumber(value);
					break;
				case OperationType.OPERATOR:
					this.updateOperator(value);
					break;
				case OperationType.EQUALS:
					this.evaluate();
					break;
				case OperationType.CLEAR:
					this.setLeftOperand(undefined);
					this.setResetCurrValue(false);
					this.setOperator(undefined);
					this.setCurrentValue('');
					break;
				default:
					throw 'Unknown operation type ' + type;
			}
		},

		/**
		 * Returns current result
		 * 
		 * @return {[String]} new result value
		 */
		getDisplayResult: function () {
			return this.currValue ? this.currValue : '0';
		}

	};

	return Model;
});