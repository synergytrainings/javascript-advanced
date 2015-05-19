define('View', function(){
  var View = function() {
	this.container;
	this.changeListener;
  };

  View.prototype = {
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
   };
   return View; 
});