requirejs.config({
    baseUrl: 'scripts'//,
    // paths: {
    //     jquery: '../bower_components/jquery/dist/jquery'
    // }
});

require(['calculator-view'], function(View) {

	$("[data-component='calculator']").load("templates/calculator.html", function() {
		new View($(this)).init();
	});
});