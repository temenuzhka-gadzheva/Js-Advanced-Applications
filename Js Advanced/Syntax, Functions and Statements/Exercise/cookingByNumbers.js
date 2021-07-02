function cookingByNumbers(number,operation1,operation2,operation3,operation4,operation5){
    
    let myNumber = Number(number);
    let operations = [operation1,operation2,operation3,operation4,operation5];
       
      for (let index = 0; index < operations.length; index++) {
           
            switch (operations[index]) {
                case 'chop':
                    myNumber /=2;
                    break;
                 case 'dice':
                    myNumber = Math.sqrt(myNumber);
                     break;
                case 'spice':
                     myNumber += 1;
                     break;
                 case 'bake':
                     myNumber *= 3;
                    break;
                 case 'fillet':
                    myNumber *= 0.80;
                     break;
              
            }
         console.log(myNumber);
    }   
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');