/* global requirejs */
requirejs.config({
    baseUrl: '../scripts'

});
requirejs(['App'],function(App){
    'use strict';
    App.start();
});