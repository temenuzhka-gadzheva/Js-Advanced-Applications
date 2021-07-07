function solve() {

    let departButtonElement = document.querySelector("#depart");
    let arriveButtonElement = document.querySelector("#arrive");
    let infoSpanElement = document.querySelector('span');


    let whenStopped = {
        next: 'depot'
    };
    let url = `http://localhost:3030/jsonstore/bus/schedule/${whenStopped.next}`;
    
    function depart() {
        departButtonElement.disabled = true;
        arriveButtonElement.disabled = false;

        fetch(url)
            .then(response => {
                if (response.ok === 404) {
                    infoSpanElement.textContent = 'Not found!'
                }
                return response.json();
            })
            .then(data => {
                whenStopped = data;

                infoSpanElement.textContent = `Next stop ${whenStopped.name}`;
            })

    }

    function arrive() {

        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;

        fetch(url)
            .then(response => {
                if (response.ok === 404) {
                    infoSpanElement.textContent = 'Not found!'
                }
                return response.json();
            })
            .then(data => {
                whenStopped = data;

                infoSpanElement.textContent = `Arriving at ${whenStopped.name}`;
            })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();