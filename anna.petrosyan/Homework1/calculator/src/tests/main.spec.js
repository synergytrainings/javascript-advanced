describe("Calculator", function() {
    it("calculate 3+2", function() {
        expect(calc("3", "2", "+")).toEqual(5);
    });
    it("calculate 3-2", function() {
        expect(calc("3", "2", "-")).toEqual(1);
    });
    it("calculate 3*2", function() {
        expect(calc("3", "2", "*")).toEqual(6);
    });
    it("calculate 3/2", function() {
        expect(calc("3", "2", "/")).toEqual(1.5);
    });
});