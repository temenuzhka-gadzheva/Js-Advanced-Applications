function solve(cardFace,cardSuit){
let typeOfCard = {
    face: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    suits: {C : '\u2663', H: '\u2665', S: '\u2660', D: '\u2666'},
    toString(){
        return `${cardFace}${typeOfCard.suits[cardSuit]}`;
    }
}

if (typeOfCard.suits[cardSuit] && typeOfCard.face.includes(cardFace)) {
    return typeOfCard.toString();
}else  {
    throw new Error('Error')
}
}


console.log(solve('A','S'));
console.log(solve('10', 'H'));
console.log(solve('1', 'C'));