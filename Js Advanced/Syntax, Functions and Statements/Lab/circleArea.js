
function circleArea(argument){
    
    if(typeof(argument) === 'number'){
        let area = Math.PI * Math.pow(argument,2);
        console.log(area.toFixed(2));
    }else{
      console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`) ;
    }
   
   }
   circleArea('jdfkjs');
   circleArea(5.32);