require(['calc/view', 'table/view'], function(CalculatorView, TableView) {
	"use strict";

	$("[data-component='calculator']").each(function() {
		new CalculatorView($(this));
	});

	$("[data-component='table']").each(function() {
		new TableView($(this));
	});
});