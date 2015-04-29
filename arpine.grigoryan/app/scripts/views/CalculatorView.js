var com = typeof com === "undefined" ? {}:com;
com.training = com.training || {};
com.training.views = com.training.views || {};
com.training.enums = com.training.enums || {};

com.training.views.CalculatorView = function() {
    var enumDec = com.training.enums;
    this.button = new com.training.views.Button();
    this.modelView = null;
    var t = this;
    
    this.setModelView = function(modelView) {
        this.modelView = modelView;
    
    };
  
    this.updateDisplay= function(currentValue) {
        $("#calculator_display").val(currentValue);
        return true;
    };
    
  $(".js_op").click(function(){
                    var op = $(this).attr('id');
                    
                    t.button.setButtonType(enumDec.ButtonType.OPERATOR);
                    t.button.setValue(op);
                    
                    t.modelView.changeState(t.button);
                    
                    
                    });
  
  //handle operator click event
  $(".js_num").click(function(){
                     var number = $(this).attr('id');
                     
                     t.button.setButtonType(enumDec.ButtonType.NUMBER);
                     t.button.setValue(number);
                     
                     t.modelView.changeState(t.button);
                     });
  
};
