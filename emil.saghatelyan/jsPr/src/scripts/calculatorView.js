define('CalculatorView',function (){
    'use strict';
    var CalculatorView=function(){
        "use strict";
        this.container;
        this.eventListener;
    };
    CalculatorView.prototype={
        initCalculator: function(container){
            this.container = container;
            var that=this;
            $('.js-oper', container).bind("click", function () {
                that.eventListener($(this).attr('data-op-value'));
            });

        },

        showResult: function(val){
            $('.screen', this.container).html(val);
        },
        setEventListener:function(eventListener){
            this.eventListener=eventListener;
        }
    };
    return CalculatorView;
});



///**
// * Created by Emil on 5/2/2015.
// */
///**
// * @namespace
// */
//var com = typeof (com) !== "undefined" ? com : {};
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
//com.emil.calculator.view = com.emil.calculator.view || {};
//
//com.emil.calculator.view.CalculatorView=function(){
//    this.container;
//    this.eventListener;
//};
//com.emil.calculator.view.CalculatorView.prototype={
//    initCalculator: function(container){
//        this.container = container;
//        var that=this;
//        $('.js-oper', container).bind("click", function () {
//            that.eventListener($(this).attr('data-op-value'));
//        });
//
//    },
//
//    showResult: function(val){
//        $('.screen', this.container).html(val);
//    },
//    setEventListener:function(eventListener){
//        this.eventListener=eventListener;
//    }
//};
