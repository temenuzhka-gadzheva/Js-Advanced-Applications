function timeToWalk(steps, footPrint, speed){
    let stepsToUni = Number(steps);
    let stepsMetersHr = Number(footPrint);
    let studentSpeed = Number(speed);

    let dictanceInMeters = stepsToUni * stepsMetersHr;
    let speedMetersBySec = studentSpeed / 3.6;
    let neededTime = dictanceInMeters / speedMetersBySec;
    let rest = Math.floor(dictanceInMeters / 500);

    let timeInHours = Math.floor(neededTime / 3600);
    let timeInMin = Math.floor(neededTime / 60);
    let timeInSec = Math.round(neededTime - (timeInMin * 60));

    console.log((timeInHours < 10 ? "0" : "") + timeInHours
    + ":"
    + ((timeInMin + rest) < 10 ? "0" : "") 
    + (timeInMin + rest) + ":" + (timeInSec < 10 ? "0": "") + timeInSec);
}
timeToWalk(2564, 0.70, 5.5);
