define(function(){
	'use strict';

	var OperatorTypes = Object.freeze({
		DIGIT : {supported: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']}, 
		OPERATOR: {supported: ['+', '-', '*', '/']}, 
		EQUALS : {},
		CLEAR : {}
	});
	
	return OperatorTypes;
});