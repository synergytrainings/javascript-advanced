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

/**
 * @namespace
 */
com.synergy.jstraining.calculator.view = com.synergy.jstraining.calculator.view || {};

/**
 * JS view model for calculator implementation
 */
com.synergy.jstraining.calculator.view.View = function() {
	var container;
	var changeListener;
};

com.synergy.jstraining.calculator.view.View.prototype = {
	init : function(container){
		this.container = container;
		var t  = this;
		$('.col-sm-3', t.container).bind('click.calculator', function(){
			t.changeListener($(this).attr('data-key-value'));
		});
	},
	
	setChangeListener : function(changeListener) {
		this.changeListener = changeListener;
	},
	
	redraw : function(result){
		$('#result', this.container).val(result);
	}
}