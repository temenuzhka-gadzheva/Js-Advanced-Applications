const ChristmasMovies = require('../ChristmasMovies_Resources');
const { expect } = require('chai');


describe('Test Christmas movies functionallity', () => {


    let movies;
    beforeEach(function () {
        movies = new ChristmasMovies();
    });

    describe('Test constructor Christmas movies functionallity', () => {
        it('Should passed when constructor is valid', () => {

            expect(movies.movieCollection).to.eql([]);
            expect(movies.movieCollection.length).to.eql(0);
            expect(movies.watched).to.eql({});
            expect(movies.actors).to.eql([]);
            expect(movies.actors.length).to.eql(0);

        });
    });
    describe('Test buy movie functionallity', () => {
        it('Should correctly added movie', () => {

            let name = 'Home Alone 2';
            let actors = ['Macaulay Culkin'];
            let message = `You just got ${name} to your collection in which ${actors.join(', ')} are taking part!`;

            expect(movies.buyMovie(name, actors)).to.equal(message);
        });

        it('Should throw when movie already exist in collection', () => {

            let name = 'Home Alone 2';
            let actors = ['Macaulay Culkin'];

            movies.buyMovie(name, actors);

            function existMovie() {
                return movies.buyMovie(name, actors);
            }
            let message = `You already own ${name} in your collection!`

            expect(existMovie).to.throw(Error, message);
        });

        it('Should correctly added only unique names of actors', () => {

            let name = 'Home Alone 2';
            let actors = ['Macaulay Culkin,Macaulay Culkin,Macaulay Culkin,Macaulay Culkin'];
            let message = `You just got ${name} to your collection in which ${actors.join(', ')} are taking part!`;

            expect(movies.buyMovie(name, actors)).to.equal(message);
        });

    });

    describe('Test discard movie functionallity', () => {
        it('Should throw if movie is not in collection', () => {
            function newMovie() {
                return movies.discardMovie('Anabel');
            }

            expect(newMovie).to.throw();
        });

        it('Should throw if movie is not watched', () => {

            movies.buyMovie('Anabel', ['Anabel']);
            function newMovie() {
                return movies.discardMovie('Anabel').to.throw();
            }

            expect(newMovie).to.throw();
        });

        it('Should delete movie when exist in collection', () => {

            movies.buyMovie('Ali Baba', ['Ali,Jasemine,Murgiana,Sliman']);
            movies.watchMovie('Ali Baba');
            let actualResult = movies.discardMovie('Ali Baba');
            let name = 'Ali Baba';
            let message = `You just threw away ${name}!`

            expect(actualResult).to.equal(message);
        });
    });

    describe('Test watch movie functionallity', () => {

        it('Should add correct new movie to wachList', () => {
            movies.buyMovie('Maleficent', ['Angelina Jolie']);
            movies.watchMovie('Maleficent');
            let actualResult = movies.watched['Maleficent'];

            expect(actualResult).to.equal(1);
        });

        it('Should  correct  increase count', () => {
            movies.buyMovie('Maleficent', ['Angelina Jolie']);
            movies.watchMovie('Maleficent');
            movies.watchMovie('Maleficent');
            movies.watchMovie('Maleficent');

            let actualResult = movies.watched['Maleficent'];

            expect(actualResult).to.equal(3);
        });

        it('Should return exception when movie is not in collection', () => {
            function newMovie() {
                return movies.watchMovie('Agata');
            }

            let message = 'No such movie in your collection!';

            expect(newMovie).to.throw(Error, message);
        });
    });

    describe('Test favourite movie functionallity', () => {

        it('Should throw exception when have not movie int watchedList', () => {

            function newMovie() {
                return movies.favouriteMovie();
            }

            expect(newMovie).to.throw();
        });

        it('Should return correct message with favourite movie', () => {
            movies.buyMovie('Maleficent', ['Angelina Joley']);
            movies.watchMovie('Maleficent');
            movies.watchMovie('Maleficent');
            movies.watchMovie('Maleficent');
            movies.buyMovie('Agata', ['Kristy']);
            movies.watchMovie('Agata');

            let message = 'Your favourite movie is Maleficent and you have watched it 3 times!'

            expect(movies.favouriteMovie()).to.equal(message);
        });
    });

    describe('Test most starred actor functionallity', () => {

        it('Should throw exception when have not movies in collection', () => {
            function testMovie() {
                return movies.mostStarredActor();
            }
            expect(testMovie).to.throw();
        });
        it('Should throw exception when have empty collection', () => {
            let message = 'You have not watched a movie yet this year!';
            function newMovie() {
                return movies.mostStarredActor()
            }
            expect(newMovie).to.throw(Error, message);
        });
        it('Should return correct message', () => {
            movies.buyMovie('Agata', ['Angelina Joley']);
            movies.watchMovie('Agata');
            movies.watchMovie('Agata');
            movies.buyMovie('Maleficent', ['Angelina Joley']);
            movies.watchMovie('Maleficent');
            movies.buyMovie('Ali Baba', ['Ali']);
            movies.watchMovie('Ali Baba');
            let message = `The most starred actor is Angelina Joley and starred in 2 movies!`;

            expect(movies.mostStarredActor()).to.equal(message);
        });
    });
});