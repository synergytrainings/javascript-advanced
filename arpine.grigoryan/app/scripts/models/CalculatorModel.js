/*var com = typeof com === "undefined" ? {}:com;
com.training = com.training || {};
com.training.models = com.training.models || {};
com.training.enums = com.training.enums || {};

com.training.models.CalculatorModel = function () {
    var operTypeDec = com.training.enums.OperetionType;
    this.firstValue = null;
    this.secondValue = null;
    this.needToUpdate = false;
    
    this.operationType = operTypeDec.NO_OPER;
    var MAX_LENGTH = 10;
    
    
    this.setOerationType= function(operationType){
        if (!(operationType == operTypeDec.EQUAL.symb || operationType == operTypeDec.PLUS_MIN.symb) && this.needToUpdate) {
            this.operationType =  operTypeDec.NO_OPER;
            
            if (this.secondValue !== null) {
                this.secondValue = null;
            }
            this.needToUpdate = false;
            
        }
        
        switch (operationType) {
            case operTypeDec.C.symb :
                this.resetModel();
                break;
            case operTypeDec.PLUS_MIN.symb :
                if (!this.needToUpdate && this.secondValue !== null) {
                    this.secondValue = 0 - (+this.secondValue);
                } else if(this.firstValue !== null && this.firstValue !== 0) {
                    this.firstValue = 0 - this.firstValue;
                }
                break;
                
            case operTypeDec.EQUAL.symb :
                this.calculateEqualResult();
                break;
                
            default :
                this.calculateResult();
                this.operationType = operationType;
                break;
                
        }
        
        return true;
    };
    
    
    this.setNumber=function(number){
        if (this.needToUpdate) {
            if (this.secondValue !== null && (this.firstValue !== null || this.firstValue !== 0)) {
                this.needToUpdate = false;
                this.resetModel();
            }
            
        }
        if (this.operationType !== operTypeDec.NO_OPER) {
            if (this.firstValue !== null) {
                this.secondValue =  this.getCombinedValue(this.secondValue, number);
            }
            
            else {
                this.firstValue =   this.getCombinedValue(this.firstValue, number);
            }
        }
        else {
            this.firstValue =  this.getCombinedValue(this.firstValue, number);
        }
        //  callback && callback();
        
    };
    
    this.getCombinedValue = function(value, newValue) {
        
        if (value === '0' && newValue ==".") {
            value = "0"+newValue;
        } else if (value === null || value === '0') {
            value = newValue;
        } else {
            if ( (value+ "").length < MAX_LENGTH) {
                value = value + newValue;
            }
        }
        return value;
    };
    
    this.getValue = function(){
        //    return this.result;
        return (this.secondValue === null || this.secondValue !== null && this.needToUpdate) ? this.firstValue+""  : this.secondValue+ "";
    };
    
    this.resetModel = function(){
        this.firstValue = '0';
        this.secondValue = null;
        this.operationType = com.training.enums.OperetionType.NO_OPER;
        return true;
        
    };
    
    this.calculateEqualResult = function () {
        if (this.operationType !== operTypeDec.NO_OPER) {
            var result;
            if (this.secondValue !== null ) {
                result = com.training.enums.OperetionType.getResult(this.firstValue,this.secondValue, this.operationType);
            } else if (this.firstValue !== null || this.firstValue !== 0) {
                result = com.training.enums.OperetionType.getResult(this.firstValue,this.firstValue, this.operationType);
            }
            this.firstValue = result;
            
        }
        this.needToUpdate = true;
        
    };
    
    this.calculateResult = function(){
        if (this.secondValue !== null  && this.operationType !== operTypeDec.NO_OPER ) {
            var result = com.training.enums.OperetionType.getResult(this.firstValue,this.secondValue, this.operationType);
            this.resetModel();
            this.firstValue = result;
            this.needToUpdate = true;
            
        }
        
    };
    
};*/

define(['enums/OperetionType','enums/ButtonType'],function(OperationType,ButtonType){
       var CalculatorModel = function () {
       var operTypeDec = OperationType;
       this.firstValue = null;
       this.secondValue = null;
       this.needToUpdate = false;
       
       this.operationType = operTypeDec.NO_OPER;
       var MAX_LENGTH = 10;
       
       
       this.setOerationType= function(operationType){
       if (!(operationType == operTypeDec.EQUAL.symb || operationType == operTypeDec.PLUS_MIN.symb) && this.needToUpdate) {
       this.operationType =  operTypeDec.NO_OPER;
       
       if (this.secondValue !== null) {
       this.secondValue = null;
       }
       this.needToUpdate = false;
       
       }
       
       switch (operationType) {
       case operTypeDec.C.symb :
       this.resetModel();
       break;
       case operTypeDec.PLUS_MIN.symb :
       if (!this.needToUpdate && this.secondValue !== null) {
       this.secondValue = 0 - (+this.secondValue);
       } else if(this.firstValue !== null && this.firstValue !== 0) {
       this.firstValue = 0 - this.firstValue;
       }
       break;
       
       case operTypeDec.EQUAL.symb :
       this.calculateEqualResult();
       break;
       
       default :
       this.calculateResult();
       this.operationType = operationType;
       break;
       
       }
       
       return true;
       };
       
       
       this.setNumber=function(number){
       if (this.needToUpdate) {
       if (this.secondValue !== null && (this.firstValue !== null || this.firstValue !== 0)) {
       this.needToUpdate = false;
       this.resetModel();
       }
       
       }
       if (this.operationType !== operTypeDec.NO_OPER) {
       if (this.firstValue !== null) {
       this.secondValue =  this.getCombinedValue(this.secondValue, number);
       }
       
       else {
       this.firstValue =   this.getCombinedValue(this.firstValue, number);
       }
       }
       else {
       this.firstValue =  this.getCombinedValue(this.firstValue, number);
       }
       //  callback && callback();
       
       };
       
       this.getCombinedValue = function(value, newValue) {
       
       if (value === '0' && newValue ==".") {
       value = "0"+newValue;
       } else if (value === null || value === '0') {
       value = newValue;
       } else {
       if ( (value+ "").length < MAX_LENGTH) {
       value = value + newValue;
       }
       }
       return value;
       };
       
       this.getValue = function(){
       //    return this.result;
       return (this.secondValue === null || this.secondValue !== null && this.needToUpdate) ? this.firstValue+""  : this.secondValue+ "";
       };
       
       this.resetModel = function(){
       this.firstValue = '0';
       this.secondValue = null;
       this.operationType = OperationType.NO_OPER;
       return true;
       
       };
       
       this.calculateEqualResult = function () {
       if (this.operationType !== operTypeDec.NO_OPER) {
       var result;
       if (this.secondValue !== null ) {
       result = operTypeDec.getResult(this.firstValue,this.secondValue, this.operationType);
       } else if (this.firstValue !== null || this.firstValue !== 0) {
       result = operTypeDec.getResult(this.firstValue,this.firstValue, this.operationType);
       }
       this.firstValue = result;
       
       }
       this.needToUpdate = true;
       
       };
       
       this.calculateResult = function(){
       if (this.secondValue !== null  && this.operationType !== operTypeDec.NO_OPER ) {
       var result = operTypeDec.getResult(this.firstValue,this.secondValue, this.operationType);
       this.resetModel();
       this.firstValue = result;
       this.needToUpdate = true;
       
       }
       
       };
       
       };
       return CalculatorModel;
       });
