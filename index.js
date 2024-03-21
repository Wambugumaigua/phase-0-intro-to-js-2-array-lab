describe('cats', function () {
    var cats; 

    beforeEach(function () {
        cats = ["Milo", "Otis", "Garfield"]; 
    });

    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
        expect(cats).toEqual(["Milo", "Otis", "Garfield"]);
    });

    describe('Array functions', function () {
        it('destructivelyAppendCat(name)', function () {
            cats.push("Milo", "Otis", "Garfield"); 

            it('"before each" hook for "appends a cat to the end of the cats array"', function
            });
        });
    });
})
