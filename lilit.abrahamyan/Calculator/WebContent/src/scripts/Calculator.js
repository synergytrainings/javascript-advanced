define('Calculator',['Model', 'View'],
    function(Model, View){
        return {
            init : function(container){
		var t = this;
		
		this.model = new Model();
		this.model.init();		
		
		this.view = new View();
		this.view.init(container);
		
		this.view.setChangeListener(function(keyValue){
			t.model.recalculate(keyValue);        
		});
		this.model.setChangeListener(function(result){
			t.view.redraw(result);        
		});
	}
     };
 });