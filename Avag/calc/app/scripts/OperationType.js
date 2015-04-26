/* global define */
define(function(){
	'use strict';
	
	return {
		MUL: '*',
		DIV: '/',
		SUM: '+',
		SUB: '-',
		EQ: '=',
		POINT: '.',
		RESET: 'C',
		DIGIT_0: '0',
		DIGIT_1: '1',
		DIGIT_2: '2',
		DIGIT_3: '3',
		DIGIT_4: '4',
		DIGIT_5: '5',
		DIGIT_6: '6',
		DIGIT_7: '7',
		DIGIT_8: '8',
		DIGIT_9: '9',
		getDigitKeys:function(){
			return [this.DIGIT_0, this.DIGIT_1, this.DIGIT_2, this.DIGIT_3,
					this.DIGIT_4, this.DIGIT_5, this.DIGIT_6, this.DIGIT_7,
					this.DIGIT_8, this.DIGIT_9];
		},
		getOpKeys:function(){
			return [this.MUL, this.DIV, this.SUM, this.SUB];
		}
	};
});