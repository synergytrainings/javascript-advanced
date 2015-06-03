require.config({
    baseUrl: 'scripts'
});

requirejs(['table/ProjectTable'], function(ProjectTable){
	ProjectTable.init($('#table'));
});

requirejs(['calculator/Calculator'],function(Calculator){
    Calculator.init($('.main'));
});