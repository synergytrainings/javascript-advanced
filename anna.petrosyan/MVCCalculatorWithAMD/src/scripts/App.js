/*global define*/
define('App',['Calculator'],
    function(Calculator){
        'use strict';

        return {
            start : function( ){
                var calculator = new Calculator();
                calculator.init();
            }
        };
    });