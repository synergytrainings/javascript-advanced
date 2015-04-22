/**
 * Created by Emil on 4/12/2015.
 */
describe("Calculator", function() {
    it("calculates 5+2", function() {
        expect(calculate("5", "2", "+")).toEqual(7);
    });
    it("calculates '10 - 2'", function () {
        expect(calculate(10, 2, "-")).toEqual(8);
    });

    it("calculates '10 * 2'", function () {
        expect(calculate(10, 2, "*")).toEqual(20);
    });

    it("calculates '10 / 2'", function () {
        expect(calculate(10, 2, "/")).toEqual(5);
    });
});