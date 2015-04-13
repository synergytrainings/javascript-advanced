describe('JavaScript test Jasmine', function () {
    it('test methode', function () {
        expect(OperatorEnum.getResult(20,2,"+")).toEqual(22);
		expect(OperatorEnum.getResult(20,2,"-")).toEqual(18);
		expect(OperatorEnum.getResult(20,2,"*")).toEqual(40);
		expect(OperatorEnum.getResult(20,2,"/")).toEqual(10);
        expect(function(){OperatorEnum.getResult(20,2,"&")}).toThrow();
		
    });
});