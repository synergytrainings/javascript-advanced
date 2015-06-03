define('table/ProjectTable',['table/TableModel', 'table/TableView', 'table/Project'],
    function(Model, View, Project){
        return {
            init : function(container){
			var t = this;
			
			var projects = [];
			for (var i = 1; i < 11; ++i) {
				var prj = new Project();
				prj.init(i, 'Project' + i, 10000* Math.random());
				projects.push(prj);
			}	
			
			this.view = new View();
			this.view.init(container);
			
			this.view.setRemovedListener(function(id){
				t.model.remove(id);        
			});
			
			this.view.setEditModeChangeListener(function(id){
				t.model.setEditMode(id);
			});
			
			this.view.setEditedListener(function(id, value){
				t.model.update(id, value);
			});
			
			this.view.setSortedListener(function(column, order){
				t.model.sort(column, order);
			});
			

			this.model = new Model();
			this.model.setChangeListener(function(projectList){
				t.view.redraw(projectList);        
			});			
			this.model.init(projects);
			
		}
     };
 });