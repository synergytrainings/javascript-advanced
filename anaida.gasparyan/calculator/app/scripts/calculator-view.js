define(['calculator-model', 'OperationType'], function(Model, OperationType) {
    "use strict";
    
    function View ($containerEl) {
        this.model = new Model();
        this.element = $containerEl;
    }

    View.prototype =  {

        /** 
         * @private
         * Binds events to given element's buttons
         */
        bindEvents: function() {
            var that = this;
            $("[data-btn-type='digit']", that.element).click(function(event) {
                var $el = $(event.target);
                that.updateModel(OperationType.DIGIT, $el);
                that.updateResult();
            });

            $("[data-btn-type='operator']", that.element).click(function(event) {
                var $el = $(event.target);
                that.updateModel(OperationType.OPERATOR, $el);
                that.updateResult($el);
            });

            $("[data-btn-type='eval']", that.element).click(function(){
                that.updateModel(OperationType.EQUALS);
                that.updateResult();
            });

            $("[data-btn-type='clear']", that.element).click(function(){
                that.updateModel(OperationType.CLEAR);
                that.updateResult();
            });
        },

        /** 
         * @private
         * Updates underlying model
         * @param  {OperationType} operationType 
         *         type of operation
         * @param  {JQuery} $el 
         *         
         */
        updateModel: function(operationType, $el) {
            this.model.updateModel(operationType, $el ? $el.data('value') : undefined);
        },

        /** 
         * @private
         * Updates result box text
         * @param  {JQuery} $el 
         *         jquery element to activate
         */
        updateResult: function ($el) {
            $("[data-btn-type='operator']", this.element).removeClass('active');
            if ($el) {
                $el.addClass('active');
            }
            $("[data-btn-type='result']", this.element).text(this.model.getDisplayResult());
        },

        /**
         * Initializes calculator
         */
        init: function() {
            this.bindEvents();
            this.updateResult();
        }
    };

    return View;
});