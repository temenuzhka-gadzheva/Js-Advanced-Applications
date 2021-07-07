function getInfo() {

    let stopIdElement = document.querySelector('#stopId').value;
    let urlElement = `http://localhost:3030/jsonstore/bus/businfo/${stopIdElement}`;

    let ulBussesElement = document.querySelector('#buses');
    let stopNameElement = document.querySelector('#stopName');
    fetch(urlElement)
        .then(response => {
            if (response.ok === 404) {
                throw new Error('Was not found!');
            }
            return response.json();
        })
        .then(data => {

      
            let stopName = Object.values(data)[1];

            let bussesObject = Object.values(data)[0];

            let allBusId = [];
            for (const bus of Object.keys(bussesObject)) {
                allBusId.push(Number(bus));
            }

            let allBusTime = [];
            for (const time of Object.values(bussesObject)) {
                allBusTime.push(time);
            }

            for (let i = 0; i < allBusId.length; i++) {

                for (let j = 0; j < allBusTime.length; j++) {

                    let result = `Bus ${allBusId[i]} arrives in ${allBusTime[j]} minutes`;
                    let liElement = document.createElement('li');
                    liElement.textContent = result;

                    ulBussesElement.append(liElement);

                    allBusTime.splice(j, 1);
                    break;
                }

            }

            stopNameElement.textContent = stopName;
        })
        .catch(() =>{
            stopNameElement.textContent = 'Error'
        })
}