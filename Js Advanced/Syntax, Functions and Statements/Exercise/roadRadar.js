function roadRadar(speed, area){

function getLimit(area){
    switch (area) {
        case "city": return 50;
        case "interstate": return 90;
        case "motorway": return 130;
        case "residential": return 20;
    }
}

    let limit = getLimit(area);
    let overSpeedLimit = speed - limit;

    if(limit >= speed){
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if(limit < speed){
      if(overSpeedLimit <= 20){
          console.log(`The speed is ${overSpeedLimit} km/h faster than the allowed speed of ${limit} - speeding`);
      } else if(overSpeedLimit > 20 && overSpeedLimit <= 40){
        console.log(`The speed is ${overSpeedLimit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
      } else if( overSpeedLimit > 40){
        console.log(`The speed is ${overSpeedLimit} km/h faster than the allowed speed of ${limit} - reckless driving`);
      }
    }
}




