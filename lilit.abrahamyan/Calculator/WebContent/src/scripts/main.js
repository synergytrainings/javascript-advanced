requirejs.config({
    baseUrl: 'scripts/table'
});

requirejs(['ProjectTable'], function(ProjectTable){
	ProjectTable.init($('#table'));
});