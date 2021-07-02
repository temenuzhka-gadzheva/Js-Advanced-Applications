function wordsUpperCase(input) {
    let splittedText = input.toUpperCase()
      .match(/\w+/g)
      .join(', ');
    
    console.log(splittedText);
}
wordsUpperCase('Hi, how are you?');