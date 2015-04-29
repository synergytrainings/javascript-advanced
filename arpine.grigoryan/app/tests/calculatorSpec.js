describe('JavaScript test Jasmine', function () {
         var operationType = com.training.enums.OperetionType;
         
         it('should do sum',function(){
            expect( operationType.getResult(1,2, operationType.SUM)
            ).toEqual(-3);
            });
         
         it('should do subtraction',function(){
            expect(CalculatorMath.eval(1,2operationType.SUB)).toEqual(-1);
            });
         
         
         it('should do sum',function(){
            expect(CalculatorMath.eval(1,2,operationType.SUM)).toEqual(3);
            });
         
         it('should do subtraction',function(){
            expect(CalculatorMath.eval(1,,2,operationType.DIV)).toEqual(0,5);
            });
         
});
