define(['text!../tpl/table.tpl.html'],function(tpl){
	'use strict';
	var tableView = function(el){
		this.el = el || $(tpl);
	};
	tableView.prototype = {
		constructor: tableView,

		getElement : function(){
			return this.el;
		}
    }

	return tableView;
});