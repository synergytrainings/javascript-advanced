define(['enums/OperetionType'],function(OperetionType){
    describe('CalculatorMath tests',function(){
          
             
        it('should truncate digits if limits are met',function(){
            expect(OperetionType.getResult(1,2, OperetionType.SUM.symb)).toBe(3);
        });
             
    
        it('should truncate digits if limits are met',function(){
            expect(OperetionType.getResult(1,2, OperetionType.SUB.symb)).toBe(-1);
        });
        
             
        it('should truncate digits if limits are met',function(){
            expect(OperetionType.getResult(1,2, OperetionType.MUL.symb)).toBe(2);
        });
             
             
        it('should truncate digits if limits are met',function(){
            expect(OperetionType.getResult(1,2, OperetionType.DIV.symb)).toBe(0.5);
        });
        
        it('should truncate digits if limits are met',function(){
            expect(OperetionType.getResult(1,2, OperetionType.PLUS_MIN.symb)).toBe(-1);
        });
        
                
    });
});