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

    it("should return 2 for [6, 6, 4, 4, 1, 3]", function() {
        expect(electronsAroundCores([6, 6, 4, 4, 1, 3])).toEqual(2);
    });

    it("should return 12 for [3, 5, 3, 5, 4, 2]", function() {
        expect(electronsAroundCores([3, 5, 3, 5, 4, 2])).toEqual(12);
    });

    it("should return 0 for [1]", function() {
        expect(electronsAroundCores([1])).toEqual(0);
    });

    it("should return 2 for [3]", function() {
        expect(electronsAroundCores([3])).toEqual(2);
    });

    it("should return 4 for [5]", function() {
        expect(electronsAroundCores([5])).toEqual(4);
    });

    it("should return 0 for [2, 4, 6, 2, 4, 6]", function() {
        expect(electronsAroundCores([2, 4, 6, 2, 4, 6])).toEqual(0);
    });

});