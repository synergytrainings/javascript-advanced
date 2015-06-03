define('table/Project', function (){

	var Project = function() {
		this.id;
		this.projectName;
		this.projectCost;
		this.editMode;
	};
	
    Project.prototype = {
		
		init : function(id, projectName, projectCost){
			this.id = id;
			this.projectCost = projectCost;
			this.projectName = projectName;
			this.editMode = false;
		},
	
		setProjectName : function(projectName) {
			this.projectName = projectName;
		},
		
		setProjectCost : function(projectCost) {
			this.projectCost = projectCost;
		},
		
		setEditMode: function(editMode){
			this.editMode = editMode;
		},
		
		getProjectName : function() {
			return this.projectName;
		},
		
		getProjectCost : function() {
			return this.projectCost;
		},
		
		isEditMode: function(){
			return this.editMode;
		}
	};
	
   return Project;
});