function squareOfStars(stars){
    let numbersOfStars = Number(stars);
    for (let i = 0; i < numbersOfStars; i++) {
        console.log("* ".repeat(numbersOfStars));
    }
}

squareOfStars(2);
squareOfStars(3);
squareOfStars(4);