define('Calculator',['CalculatorView', 'CalculatorModel'],function (view, model){
    'use strict';
    var Calculator = function() {
        this.model;
        this.view;
    };

    Calculator.prototype={
        init: function (continer){
            var t=this;
            this.model= new model();
            this.view= new view();

            this.view.initCalculator(continer);
            this.model.setEventListener(function(result){
                t.view.showResult(result);
            });


            this.view.setEventListener(function(value){
                t.model.calculateValue(value);
            });
        }
    };
    return Calculator;

});
//
///**
// * Created by Emil on 5/3/2015.
// */
//
///**
// * @namespace
// */
//var com = com || {};
///**
// * @namespace
// */
//com.emil = com.emil || {};
///**
// * @namespace
// */
//com.emil.calculator = com.emil.calculator || {};
///**
// * @namespace
// */
//com.emil.calculator.Calculator = function() {
//    "use strict";
//    this.model;
//    this.view;
//};
//com.emil.calculator.Calculator.prototype={
//    init: function (continer){
//        "use strict";
//        var t=this;
//        this.model= new com.emil.calculator.model.CalculatorModel();
//        this.view= new com.emil.calculator.view.CalculatorView();
//
//        this.view.initCalculator(continer);
//        this.model.setEventListener(function(result){
//            t.view.showResult(result);
//        });
//
//
//        this.view.setEventListener(function(value){
//            t.model.calculateValue(value);
//        });
//    }
//};
