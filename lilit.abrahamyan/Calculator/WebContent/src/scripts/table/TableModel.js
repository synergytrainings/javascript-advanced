define('TableModel', function (){

   var TableModel = function() {
	this.projects;
	this.changeListener;
   };

   TableModel.prototype = {
	init : function(projects){
		this.projects = projects;
		this.changeListener(projects);
	},
	
	setChangeListener : function(changeListener) {
		this.changeListener = changeListener;
	},
	
	remove : function(id){
		var t = this;
		var index = this.findProject(id);
		t.projects.splice(index,1);
		this.changeListener(this.projects);
	},
	
	setEditMode: function(id) {
		var index = this.findProject(id);
		this.projects[index].setEditMode(true);
		this.changeListener(this.projects);
	},	
	
	update : function(id, value){
		var index = this.findProject(id);
		var project = this.projects[index]
		project.setEditMode(false);
		project.setProjectName(value);
		this.changeListener(this.projects);
	},
	
	sort : function(column, order){
		var sorted = this.isSorted(order);
		while(sorted == false){
			this.shuffle();
			sorted = this.isSorted(order);
		}
		this.changeListener(this.projects);
	},
	
	shuffle : function() {
		var p = this.projects;
		for(var j, x, i = p.length; i; j = Math.floor(Math.random() * i), x = p[--i], p[i] = p[j], p[j] = x);
	},
	 
	isSorted : function(order){
		for(var i=1; i<this.projects.length; i++) {
			if (order === 'asc' && this.projects[i-1].projectName > this.projects[i].projectName) { 
				return false;
			} else if (order === 'desc' && this.projects[i-1].projectName < this.projects[i].projectName) {
				return false;
			}
		}
		return true;
	},
	
	findProject: function(id){
		var t = this;
		for (var i=0; i<this.projects.length; ++i) {
			if (t.projects[i].id == id) {
				return i;
			}
		}
	}
   };
   return TableModel;
});