/*function solve(arr){
    return arr.reduce(function(result, currentValue, 
        index, initalArray) {
        if (currentValue >= result[result.length - 1] 
            || result.length === 0) {
            result.push(currentValue)
        }
        return result;
    }, [])
}*/
function solve(arr){
    
return arr.reduce(function(resultArr,value){
    if (value >= resultArr[resultArr.length -1]
        || resultArr.length == 0) {
          resultArr.push(value);
      }
      return resultArr;
},[]);
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));