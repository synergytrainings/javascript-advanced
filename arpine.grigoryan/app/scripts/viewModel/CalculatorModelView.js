var com = typeof com === "undefined" ? {}:com;
com.training = com.training || {};
com.training.app = com.training.app || {};


com.training.app.CalculatorModelView = function(model, view) {
    var enumDec = com.training.enums;

    
    this.model = model;
    this.view = view;
    
    this.setView= function(view){
        this.view = view;
    };
    
    this.changeState=function(button){
        if (button.getButtonType() === enumDec.ButtonType.NUMBER) {
            this.model.setNumber(button.getValue());
            
        } else {
         this.model.setOerationType(button.getValue());
        }
        this.view.updateDisplay(this.model.getValue());
        
    };
};