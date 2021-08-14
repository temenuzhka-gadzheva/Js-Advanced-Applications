let cinema = require('./cinema');
let { assert, expect } = require('chai');

describe("Tests of cinema functionallity", function () {
    describe("showMovies functionallity", function () {
        it("Correct message when arr length is 0", function () {
            let message = 'There are currently no movies to show.'
            let movieArr = [];
            let actualResult = cinema.showMovies(movieArr);
            assert.equal(message, actualResult);
        });
        it("Correct message when arr length is more than 0", function () {
            let expectResult = '1, 3, 4';
            let movieArr = [1, 3, 4];
            let actualResult = cinema.showMovies(movieArr);
            assert.equal(expectResult, actualResult);
        });
    });
    describe("ticketPrice functionallity", function () {
        it("Have not  projection type", function () {

            let projectionType = 'Invalid';
            function actualResult() {
                const schedule = {
                    "Premiere": 12.00,
                    "Normal": 7.50,
                    "Discount": 5.50
                }
                return cinema.ticketPrice(projectionType);
            }
            let expectResult = `Invalid projection type.`;
            expect(actualResult).to.throw(expectResult);

        });
        it("Have   projection type", function () {

            let projectionType = 'Premiere';

            const schedule = {
                "Premiere": 12.00,
                "Normal": 7.50,
                "Discount": 5.50
            }
            let actualResult = cinema.ticketPrice(projectionType);
            let expectResult = `12.00`;
            assert.equal(actualResult, expectResult);

        });
    });
    describe("swapSeatsInHall functionallity", function () {
        it("If first param  is not int", function () {
            let first = 'string';
            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, 2);
            assert.equal(actualResult, message);
        });
        it("If second param  is not int", function () {
            let second = 'as';
            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(2, second);
            assert.equal(actualResult, message);
        });
        it("If first param  is 0  second  is string", function () {
            let first = 0;
            let second = 'string';
            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If  params  are not int", function () {
            let first = 'as';
            let second = 'string';

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  params  are invalid negative int", function () {
            let first = -7;
            let second = -12;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If first param  is invalid negative int", function () {
            let first = -7;
            let second = 12;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  params  are invalid  int", function () {
            let first = -7;
            let second = 21;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If second param  is invalid negative int", function () {
            let first = 7;
            let second = -12;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If first param  is more than 20", function () {
            let first = 21;
            let second = 12;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If second param  is more than 20", function () {
            let first = 19;
            let second = 22;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If params  iare more than 20", function () {
            let first = 23;
            let second = 22;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If first is bool second emtry obj", function () {
            let first = false;
            let second = {};

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If first param  is equal 0", function () {
            let first = 0;
            let second = 19;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If second param  is equal 0", function () {
            let first = 10;
            let second = 0;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  params  are equal 0", function () {
            let first = 0;
            let second = 0;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  params  are  valid", function () {
            let first = 10;
            let second = 12;

            let message = "Successful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If  params  are float  valid", function () {
            let first = 1.20;
            let second = 20.1;
            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  params  are equal ", function () {
            let first = 10;
            let second = 10;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });

        it("If  params  are equal invalid ", function () {
            let first = -10;
            let second = -10;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  params  are equal  string ", function () {
            let first = `string`;
            let second = `string`;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  params  are  floating nums ", function () {
            let first = 13.44;
            let second = 12.22;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  params  are  floating invalid nums ", function () {
            let first = 0.02;
            let second = 21.00;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it("If  first  are  floating invalid nums ", function () {
            let first = 0.02;
            let second = 12;

            let message = "Unsuccessful change of seats in the hall.";
            let actualResult = cinema.swapSeatsInHall(first, second);
            assert.equal(actualResult, message);
        });
        it('invalid data ', ()=>{
            let message = "Unsuccessful change of seats in the hall.";
            expect(cinema.swapSeatsInHall(21, 2)).to.be.eql(message)
            expect(cinema.swapSeatsInHall(2, 21)).to.be.eql(message)
        })

       

    });
});

