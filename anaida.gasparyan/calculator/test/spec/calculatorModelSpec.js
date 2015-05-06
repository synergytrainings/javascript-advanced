define(['calculator-model', 'OperationType'], function(Model, OperationType) {

    describe('just checking', function() {
    	var model;

		beforeEach(function() {
		    model = new Model();
		});

        it('Check initial state of model', function() {
        	expect(model.leftOperand).toBeUndefined();
        	expect(model.resetCurrValue).toBe(false);
        	expect(model.operator).toBeUndefined();
        	expect(model.currValue).toBeDefined();
        	expect(model.currValue).toEqual('');
        });

        it('Check setting state of model', function() {
        	model.updateModel(OperationType.DIGIT, '5');
            expect(model.getDisplayResult()).toEqual('5');
        });

    });

});
