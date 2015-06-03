define('table/TableView', ['table/ProjectView'], function(ProjectView){
  var TableView = function() {
	this.container;
	this.nameColumn;
	this.costColumn;
	this.removedListener;
	this.editModeChangeListener;
	this.editedListener;
	this.sortedListener;
  };

  TableView.prototype = {
	init : function(container){
		this.container = container;
		this.nameColumn = $('.edit-name-hd', container);
		this.costColumn = $('.edit-cost-hd', container);
	},
	
	setRemovedListener : function(removedListener) {
		this.removedListener = removedListener;
	},
	
	setEditedListener : function(editedListener) {
		this.editedListener = editedListener;
	},
	
	setSortedListener : function(sortedListener) {
		this.sortedListener = sortedListener;
	},
	
	setEditModeChangeListener : function(editModeChangeListener) {
		this.editModeChangeListener = editModeChangeListener;
	},
	
	redraw : function(projects){
		var t = this;
		var container = $('#content', t.container);
		container.empty();
		$.each(projects, function(i, project){
			var prView = new ProjectView();
			prView.init(project);
			$(container).append(prView.buildRow());
		});
		this.bindListeners();
	},
	
	bindListeners: function(){
		var t  = this;
		$('.remove-row', t.container).bind('click.table.remove', function(){
			t.removedListener($(this).parent().attr('data-id'));
		});
		$('.edit-name', t.container).bind('dblclick.table.editname', function(){
			t.editModeChangeListener($(this).parent().attr('data-id'));
		});
		
		$('.edit-name-input', t.container).focusout(function() {
			t.editedListener($(this).parent().attr('data-id'), $(this).val());
		});
		
		this.nameColumn.bind('click.table.header.name', function(){
			t.sortedListener('name', 'asc');
		});
		
		this.costColumn.bind('click.table.header.cost', function(){
			t.sortedListener('cost', 'asc');
		});
	}
   };
   return TableView; 
});