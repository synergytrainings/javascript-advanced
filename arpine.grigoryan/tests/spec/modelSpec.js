define(['enums/OperetionType','enums/ButtonType', 'models/CalculatorModel'],function(OperationType,ButtonType, CalculatorModel){
       describe('CalculatorModel tests',function(){
            var model;
                
            beforeEach(function(){
                model = new CalculatorModel();
            });
              
                
            it('should truncate digits if limits are met',function(){
               model.setNumber("1");
               expect(model.getValue()).toEqual("1");
               model.setOerationType("+");
                expect(model.getValue()).toEqual("1");
               model.setNumber("5");
                expect(model.getValue()).toEqual("5");
               model.setOerationType("=");
               expect(model.getValue()).toEqual("6");
            });
                
        });
});