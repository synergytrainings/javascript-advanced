/*global define*/
define('Calculator',['Model','View'],function(Model,View){
    "use strict";
    var Calculator=function(){

    };
    Calculator.prototype={
        init: function() {
            this.model=new Model();
            this.view=new View();
            var tempThis=this;

            this.view.setChangeListener(function(key){
                tempThis.model.processClick(key);
            });
            this.model.setChangeListener(function(result){
                tempThis.view.draw(result);
            });
            this.view.init();
            this.model.init();

        }
    };
    return Calculator;
});
