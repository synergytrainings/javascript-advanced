/**
 * Created by Emil on 4/12/2015.
 */
describe("Calculator", function() {
    it("calculate 5+2", function() {
        expect(calculate("5", "2", "+")).toEqual(7);
    });
});