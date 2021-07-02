function solve(car) {
    const enginesPowerAndVolume = {
        90: {
            power: 90,
            volume: 1800,
        },
        120: {
            power: 120,
            volume: 2400,
        },
        200: {
            power: 200,
            volume: 3500,
        }
    }
    const myCar = {
        model: car.model,
        engine: optionOfEngine(car.power),
        carriage: {
            type: car.carriage,
            color: car.color,
        },
        //kolela
        wheels: new Array(4)
            .fill(car.wheelsize % 2 === 0 ?
                car.wheelsize - 1 :
                car.wheelsize
            ),
    }
// opredelqme dwigatelq
    function optionOfEngine(power) {
        for (const engine in enginesPowerAndVolume) {
            if (power <= engine) {
                return enginesPowerAndVolume[engine];
            }
        }
    }
    return myCar;
}
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));