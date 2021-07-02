function solve(cards) {
    const resultArr = [];
    for (const card of cards) {
        try {
            const myCardsOfArr = [...card];
            const cardFace = myCardsOfArr.length == 3 ? myCardsOfArr.slice(0, 2).join('') : myCardsOfArr.shift();
            const suit = myCardsOfArr.pop();
            resultArr.push(createCard(cardFace, suit));
        } catch (ex) {
            console.log(`Invalid card: ${card}`);
        }
    }

    console.log(resultArr.map((card) => card.toString()).join(' '));

    function createCard(cardFace, cardSuit) {
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const cardSuits = { C: '\u2663',S: '\u2660', D: '\u2666 ', H: '\u2665' };

        if (!cardSuits[cardSuit] || !cardFaces.includes(cardFace)) {
            throw new Error('Error');
        }

        class Card {
            constructor(cardFaces, cardSuits) {
                this.face = cardFaces;
                this.suit = cardSuits;
            }

            toString() {
                return `${this.face}${cardSuits[this.suit]}`;
            }
        }

        return new Card(cardFace, cardSuit);
    }
}
solve(['AS', '10D', 'KH', '2C']);
solve(['5S', '3D', 'QD', '1C']);


