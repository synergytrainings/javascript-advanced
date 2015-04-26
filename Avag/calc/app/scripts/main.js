/* global requirejs */
requirejs.config({
  baseUrl: 'scripts',
  paths:{
    text : '/bower_components/requirejs-text/text'
  }
});
requirejs(['App'],function(App){
	'use strict';
	App.start($('main.container'));
});

