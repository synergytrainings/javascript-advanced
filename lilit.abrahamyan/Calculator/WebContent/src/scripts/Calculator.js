/**
 * @namespace
 */
var com = com || {};
/**
 * @namespace
 */
com.synergy = com.synergy || {};
/**
 * @namespace
 */
com.synergy.jstraining = com.synergy.jstraining || {};
/**
 * @namespace
 */
com.synergy.jstraining.calculator = com.synergy.jstraining.calculator || {};

com.synergy.jstraining.calculator.Calculator = function() {
	var model;
	var view;
};

com.synergy.jstraining.calculator.Calculator.prototype = {
	init : function(container){
		var t = this;
		
		this.model = new com.synergy.jstraining.calculator.model.Model();
		this.model.init();		
		
		this.view = new com.synergy.jstraining.calculator.view.View();
		this.view.init(container);
		
		this.view.setChangeListener(function(keyValue){
			t.model.recalculate(keyValue);        
		});
		this.model.setChangeListener(function(result){
			t.view.redraw(result);        
		});
	}
};
