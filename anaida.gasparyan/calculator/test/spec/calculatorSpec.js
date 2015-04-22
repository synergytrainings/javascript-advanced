/*define(['calculator'], function(calculator) {
  'use strict';

  describe("calculator operations", function () {
	it("calculates '6 + 2'", function () {
    	expect(calculator.calculate(6, 2, "+")).toBe(8);
	});

	it("calculates '6 - 2'", function () {
    	expect(calculator.calculate(6, 2, "-")).toBe(4);
	});

	it("calculates '6 * 2'", function () {
    	expect(calculator.calculate(6, 2, "*")).toBe(12);
	});

	it("calculates '6 / 2'", function () {
    	expect(calculator.calculate(6, 2, "/")).toBe(3);
	});

	it("calculates '6 % 2', throws an error when passed an unknown operator", function () {
		var testFn = function () {
    		calculator.calculate(1, 2, '%');
		};
		expect(testFn).toThrow('Unknown operator %');
	});
  });
});*/

describe("calculator operations", function () {
	var calculator = com.synisys.trainings.calculator;
	it("calculates '6 + 2'", function () {
		expect(calculator.calculate(6, 2, "+")).toBe(8);
	});

	it("calculates '6 - 2'", function () {
		expect(calculator.calculate(6, 2, "-")).toBe(4);
	});

	it("calculates '6 * 2'", function () {
		expect(calculator.calculate(6, 2, "*")).toBe(12);
	});

	it("calculates '6 / 2'", function () {
		expect(calculator.calculate(6, 2, "/")).toBe(3);
	});

	it("calculates '6 % 2', throws an error when passed an unknown operator", function () {
		var testFn = function () {
			calculator.calculate(1, 2, '%');
		};
		expect(testFn).toThrow('Unknown operator %');
	});
});