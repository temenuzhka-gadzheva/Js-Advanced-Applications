function solve(arrOfCommands){
    let initialNumber = 1;
    let arr = [];

    for (let i = 0; i < arrOfCommands.length; i++) {
      if (arrOfCommands[i] == 'add') {
          arr.push(initialNumber);
      } else if (arrOfCommands[i] == 'remove') {
          arr.pop();
      }
        initialNumber++;
    }
    if (arr.length > 0) {
        return arr.join('\n');
    } else{
        return 'Empty';
    }
}
console.log(solve(['add', 
'add', 
'add', 
'add']
));