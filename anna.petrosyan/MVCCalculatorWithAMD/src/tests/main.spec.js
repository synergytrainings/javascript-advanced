/*global define ,describe, it ,expect*/
define('CalculatorTests',['Model'],function(model) {
    "use strict";
    describe("Calculator tests", function () {
        it("calculate 3+2", function () {
            expect(model.calculate("3", "2", "+")).toEqual(5);
        });
        it("calculate 3-2", function () {
            expect(model.calculate("3", "2", "-")).toEqual(1);
        });
        it("calculate 3*2", function () {
            expect(model.calculate("3", "2", "*")).toEqual(6);
        });
        it("calculate 3/2", function () {
            expect(model.calculate("3", "2", "/")).toEqual(1.5);
        });
    });
});