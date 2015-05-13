//var com = typeof com === "undefined" ? {}:com;
//com.training = com.training || {};
//com.training.views = com.training.views || {};
//
//com.training.views.Button = function () {
//    this.buttonType = com.training.enums.OperetionType.NO_OPER;
//    this.value = null;
//    
//    this.setButtonType = function(buttonType) {
//        this.buttonType = buttonType;
//    };
//    
//    this.getButtonType = function() {
//        return this.buttonType;
//    };
//    
//    this.setValue = function(value) {
//        this.value = value;
//    };
//    
//    this.getValue = function() {
//        return this.value + "";
//    };
//};



define(['enums/OperetionType'],
       function(OperetionType){
       
       var Button = function(){
       
       this.buttonType = OperetionType.NO_OPER;
       this.value = null;
       
       this.setButtonType = function(buttonType) {
       this.buttonType = buttonType;
       };
       
       this.getButtonType = function() {
       return this.buttonType;
       };
       
       this.setValue = function(value) {
       this.value = value;
       };
       
       this.getValue = function() {
       return this.value + "";
       };
       
       }
       return Button;
       
       });