define([], function () {
	"use strict";

	function Project(id, name, cost) {
		this.id = id; 
		this.name = name;
        this.cost = cost;
	}

	Project.prototype = {

        getFormattedCost: function(currency) {
            return ("" + this.cost).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + " " + currency;
        }
	};

	return Project;
});