/* global requirejs */
requirejs.config({
    baseUrl: 'scripts/table'

});
requirejs(['TableApp'],function(App){
    'use strict';
    App.start();

});