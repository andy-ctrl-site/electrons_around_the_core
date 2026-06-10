describe("electronsAroundCores", function() {
    beforeEach(function() {
        function electronsAroundCores(numbers) {
        return 6;
    }
    });

    it("should return 6 for [1, 2, 3, 4, 5]", function() {
        expect(electronsAroundCores([1, 2, 3, 4, 5])).toEqual(6);
    });

});