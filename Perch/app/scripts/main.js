requirejs.config({
	baseUrl: 'scripts',
    paths: {
        "text" : "../bower_components/requirejs-text/text"
    }
});

requirejs(['appTable'],function(appTable){
	'use strict';
	appTable.start($(".app-table"));
});