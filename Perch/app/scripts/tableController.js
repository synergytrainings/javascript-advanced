define(function(){
	'use strict';
	var Table = function(model,view){
		this.view = view;
		this.model = model;
	};

	Table.prototype = {
		constructor: Table,
	    getElement : function(){
	    	return this.view.getElement();
	    }
	};

	return Table;
});