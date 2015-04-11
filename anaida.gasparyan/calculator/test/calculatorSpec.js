describe("calculator operations", function () {
	it("calculates '6 + 2'", function () {
    	expect(calculate(6, 2, "+")).toEqual(8);
	});

	it("calculates '6 - 2'", function () {
    	expect(calculate(6, 2, "-")).toEqual(4);
	});

	it("calculates '6 * 2'", function () {
    	expect(calculate(6, 2, "*")).toEqual(12);
	});

	it("calculates '6 / 2'", function () {
    	expect(calculate(6, 2, "/")).toEqual(3);
	});

	it("calculates '6 % 2', throws an error when passed an unknown operator", function () {
		var testFn = function () {
    		calculate(1, 2, '%');
		};
		expect(testFn).toThrow(new Error('Unknown operator %'));
	});
});