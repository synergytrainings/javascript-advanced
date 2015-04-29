define(['calculator-model', 'OperationType'], function(Model, OperationType) {
    "use strict";
    
    function View($containerEl) {
        this.model = new Model();
        this.element = $containerEl;
    }

    View.prototype = (function(){

        function bindEvents() {

            $("[data-btn-type='digit']", this.element).click($.proxy(function(event) {
                var $el = $(event.target);
                updateModel.call(this, OperationType.DIGIT, $el);
                updateResult.call(this);
            }, this));

            $("[data-btn-type='operator']", this.element).click($.proxy(function(event) {
                var $el = $(event.target);
                updateModel.call(this, OperationType.OPERATOR, $el);
                updateResult.call(this, $el);
            }, this));

            $("[data-btn-type='eval']", this.element).click($.proxy(function(){
                updateModel.call(this, OperationType.EQUALS);
                updateResult.call(this);
            }, this));

            $("[data-btn-type='clear']", this.element).click($.proxy(function(){
                updateModel.call(this, OperationType.CLEAR);
                updateResult.call(this);
            }, this));
        }

        function updateModel(operationType, $el) {
            this.model.updateModel(operationType, $el ? $el.data('value') : undefined);
        }

        function updateResult($el) {
            $("[data-btn-type='operator']", this.element).removeClass('active');
            if ($el) {
                $el.addClass('active');
            }
            $("[data-btn-type='result']", this.element).text(this.model.getDisplayResult());
        }

        return {

            constructor: View,

            /**
             * Initializes calculator
             *  
             */
            init: function() {
                bindEvents.call(this);
                updateResult.call(this);
            }
        }
    })();

    return View;
});