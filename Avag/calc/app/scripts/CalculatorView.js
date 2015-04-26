/* global define */
define(['text!../tpl/Calculator.tpl.html'],function(tpl){
  'use strict';
  var CalculatorView = function(el){
    this.el = el || $(tpl);
    this.listener = null;
  };
  CalculatorView.prototype = {
    constructor: CalculatorView, 
    init: function(){
      var that = this;
      this.el.on('click','.js-btn',function(){
        if( that.listener ){
          that.listener( $(this).data('op-type') );
        }
      });
    },
    dispose:function(){
      this.el.off('click','.js-btn');      
      this.el.closest('body').unbind('keypress.calc');
    },
    getElement : function(){
      return this.el;
    },
    setDisplay : function(value){
      this.el.find('.js-display').text(value);
    },
    setChangeListener : function(listener){
      this.listener = listener;
    },
    setEnable:function(buttonTypes, enable){
      var btn = this.el.find('.js-btn').filter(function(){
        return !!~buttonTypes.indexOf($(this).data('op-type')); //jshint ignore:line
      });
      enable ? btn.removeClass('disabled') : btn.addClass('disabled'); // jshint ignore:line 
    },
    setError: function(show){
      var errorEl = this.el.find('.js-display');
      show ? errorEl.addClass('text-danger') : errorEl.removeClass('text-danger');// jshint ignore:line
    }
  };
  return CalculatorView;
});
