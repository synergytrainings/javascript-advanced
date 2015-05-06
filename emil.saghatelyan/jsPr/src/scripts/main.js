/**
 * Created by Emil on 5/7/2015.
 */

requirejs.config({
    baseUrl: '../scripts'

});

requirejs(['App'],function(App){
    'use strict';
    App.start();
});