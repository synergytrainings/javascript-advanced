define('table/ProjectView', ['table/Project'], function(Project){
  var ProjectView = function() {
	this.project;
	this.editMode;
  };

  ProjectView.prototype = {
	init : function(project, mode){
		this.project = project;
	},
	
	buildRow: function(project) {
		var project = this.project;
		var row = $('<div>').attr('data-id', project.id);
		row.append($('<span>').text('remove').addClass('remove-row'));
		
		if (project.isEditMode()) {
			row.append($('<input>').val(project.projectName).addClass('edit-name-input'));
		} else {
			row.append($('<span>').text(project.projectName).addClass('edit-name'));
		}
		
		row.append($('<span>').text(project.projectCost).addClass('edit-cost'));
		
		return row;
	},
	
	/*generateInput: function(projectName){
		var t = this;
		var input = $('<input>').val(projectName);
		input.focusout(function() {
		});
	}*/
	
	
   };
   return ProjectView; 
});