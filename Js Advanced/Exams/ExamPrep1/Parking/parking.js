class Parking {

    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {

        if (this.capacity == 0) {
            throw new Error("Not enough parking space.");

        } else {

            let obj = {
                carModel,
                carNumber,
                payed: false
            }
            this.vehicles.push(obj);
            this.capacity--;

            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }

    removeCar(carNumber) {
        let foundingCar = this.vehicles.some(x => x.carNumber === carNumber);

        if (!foundingCar) {
            throw new Error("The car, you're looking for, is not found.");

        } else {

            let myCar = this.vehicles.find(c => c.carNumber === carNumber);

            if (myCar.payed === false) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);

            } else {

                let index = this.vehicles.indexOf(myCar);
                this.vehicles.splice(index, 1);

                return `${carNumber} left the parking lot.`;
            }
        }

    }

    pay(carNumber) {
        let foundingCar = this.vehicles.some(x => x.carNumber === carNumber);
        if (!foundingCar) {

            throw new Error(`${carNumber} is not in the parking lot.`);

        } else {

            let car = this.vehicles.find(c => c.carNumber === carNumber);

            if (car.payed) {

                throw new Error(`${carNumber}'s driver has already payed his ticket.`);

            } else {

                car.payed = true;

                return `${carNumber}'s driver successfully payed for his stay.`;
            }
        }
    }

    getStatistics(carNumber) {

        if (carNumber === undefined) {

            let output = `The Parking Lot has ${this.capacity} empty spots left.\n`;

            let sortingVehicles = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));

            let reduceSortingVehicles = sortingVehicles.reduce((acc, value) => {

                let hasPayed = value.payed ? 'Has payed' : 'Not payed';

                acc += `${value.carModel} == ${value.carNumber} - ${hasPayed}\n`;

                return acc;

            }, '');

            output += reduceSortingVehicles;

            return output.trimEnd();

        } else {

            let car = this.vehicles.find(c => c.carNumber === carNumber);
            
            let hasPayed = car.payed ? 'Has payed' : 'Not payed';

            return `${car.carModel} == ${car.carNumber} - ${hasPayed}`;

        }


    }

}

