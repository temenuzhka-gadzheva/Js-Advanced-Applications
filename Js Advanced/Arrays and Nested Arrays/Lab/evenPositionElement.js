function evenPositionElement(sequenceOfElements){
    let result = [];
for (let index = 0; index < sequenceOfElements.length ; index++) {
    if (index % 2 == 0) {
       result.push(sequenceOfElements[index]);
    }
  
    
}
console.log(result.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60']);