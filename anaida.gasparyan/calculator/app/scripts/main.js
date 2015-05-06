requirejs.config({
    baseUrl: 'scripts'
});

require(['calculator-view'], function(View) {

	$("[data-component='calculator']").load("templates/calculator.html", function() {
		new View($(this)).init();
	});
});