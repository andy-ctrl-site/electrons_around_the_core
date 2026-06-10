describe("electronsAroundCores", function() {
    beforeEach(function() {
        function electronsAroundCores(numbers) {
        return 6;
    }
    });

    it("should return 6 for [1, 2, 3, 4, 5]", function() {
        expect(electronsAroundCores([1, 2, 3, 4, 5])).toEqual(6);
    });

    it("should return 4 for [2, 2, 3, 3]", function() {
        expect(electronsAroundCores([2, 2, 3, 3])).toEqual(4);
    });

});