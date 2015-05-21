/* global define */
define(['tableController', 'tableModel', 'tableView'],
	function(Table, TableModel, TableView) {
		'use strict';
		return {
			start : function(el){
				var table = new Table(
					new TableModel(), 
					new TableView()
				);
				table.getElement().appendTo(el);
			}
		};
	}
);