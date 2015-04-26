/* global define */
define(['text!../tpl/Calculator.tpl.html','OperationType'],function(tpl, OperationType){
  'use strict';

  var Calculator = function(model,view){
    this.view = view;
    this.model = model;
  };
  Calculator.prototype = {
    constructor: Calculator,
    setView : function(view){
      this.view = view;
    },
    setModel : function(model){
      this.model = model;
    },
    init: function(){
      var that = this;

      that.model.init();
      that.model.setChangeListener(function(){
        that.view.setDisplay( that.model.getValue() );

        if( that.model.getOperation() === null ){
          that.view.setEnable([OperationType.EQ],false);
        }else{
          that.view.setEnable([OperationType.EQ],true);
        }

        that.view.setError( that.model.hasError() );
      });

      that.view.init();
      that.view.setChangeListener(function(opType){
        that.model.applyOperation(opType);        
      });

      that.model.setValue(0);
    },
    dispose:function(){
      this.model.dispose();
      this.view.dispose();
    },
    getElement : function(){
      return this.view.getElement();
    }
  };
  return Calculator;
});
