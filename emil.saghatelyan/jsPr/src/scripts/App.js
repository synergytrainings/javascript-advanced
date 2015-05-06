/**
 * Created by Emil on 5/7/2015.
 */
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
