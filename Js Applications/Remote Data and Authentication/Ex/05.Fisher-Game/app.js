let loadButtonElement = document.querySelector('.load');
loadButtonElement.addEventListener('click', loadCatch);

let catchesHTMLElement = document.getElementById('catches');
catchesHTMLElement.querySelectorAll('.catch').forEach(x => x.remove());

let addButtonElement = document.querySelector('.add');
addButtonElement.disabled = localStorage.getItem('token') === null;
addButtonElement.addEventListener('click', createCatchElement);

async function loadCatch() {
    let getUrl = 'http://localhost:3030/data/catches';

    fetch(getUrl)
        .then(response => response.json())
        .then(data => {
            catchesHTMLElement.querySelectorAll('.catch').forEach(x => x.remove());

            catchesHTMLElement.append(...data.map(c => createHtmlCatch(c)));
        })
}

async function createCatchElement() {
    let anglerInputElement = document.querySelector(' .angler');
    let weightInputElement = document.querySelector(' .weight');
    let speciesInputElement = document.querySelector('.species');
    let locationInputElement = document.querySelector(' .location');
    let baitInputElement = document.querySelector(' .bait');
    let captureTimeInputElement = document.querySelector(' .captureTime');

    let addCatch = {
        angler: anglerInputElement.value,
        weight: Number(weightInputElement.value),
        species: speciesInputElement.value,
        location: locationInputElement.value,
        bait: baitInputElement.value,
        captureTime: Number(captureTimeInputElement.value)
    };

    let addUrl = 'http://localhost:3030/data/catches';
    fetch(addUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(addCatch)
    }).then(response => response.json())
        .then(data => {
            let createdCatch = createHtmlCatch(data);

            console.log(createdCatch);
            catchesHTMLElement.appendChild(createdCatch);
        })
}

async function updateCatch(e) {
    let currentCatchElement = e.target.parentElement;
    let anglerInputElement = currentCatchElement.querySelector('.angler').value;
    let weightInputElement = currentCatchElement.querySelector('.weight').value;
    let speciesInputElement = currentCatchElement.querySelector('.species').value;
    let locationInputElement = currentCatchElement.querySelector('.location').value;
    let baitInputElement = currentCatchElement.querySelector('.bait').value;
    let captureTimeInputElement = currentCatchElement.querySelector('.captureTime').value;

    let updatedCatch = {
        angler: anglerInputElement,
        weight: Number(weightInputElement),
        species: speciesInputElement,
        location: locationInputElement,
        bait: baitInputElement,
        captureTime: Number(captureTimeInputElement)
    };

    let updatedId = currentCatchElement.dataset.id;
    let updatedUrl = `http://localhost:3030/data/catches/${updatedId}`;
   
   fetch(updatedUrl,{
       method: "PUT",
       headers: {
        'Content-Type': 'application/json',
        'X-Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(updatedCatch)
   }).then(response => response.json())
   
}

async function deleteCatch(e) {
    let currentCatch = e.target.parentElement;
    let deletedId = currentCatch.dataset.id;
    let deletedUrl = `http://localhost:3030/data/catches/${deletedId}`;
   
   fetch(deletedUrl,{
       method: "DELETE",
       headers: {
        'X-Authorization': localStorage.getItem('token')
    }
   }).then(response => {
       if (response.status === 200) {
        currentCatch.remove();
       }
       return response.json();
   })
}

function createHtmlCatch(currentCatch) {

    let anglerLableElement = createHtmlElements('label', undefined, 'Angler');
    let anglerInputElement = createHtmlElements('input', { type: 'text', class: 'angler' }, currentCatch.angler);
    let firstHrElement = createHtmlElements('hr');

    let weightLabelElement = createHtmlElements('label', undefined, 'Weight');
    let weightInputElement = createHtmlElements('input', { type: 'number', class: 'weight' }, currentCatch.weight);
    let secondHrElement = createHtmlElements('hr');

    let speciesLabelElement = createHtmlElements('label', undefined, 'Species');
    let speciesInputElement = createHtmlElements('input', { type: 'text', class: 'species' }, currentCatch.species);
    let thirdHrElement = createHtmlElements('hr');

    let locationLabelElement = createHtmlElements('label', undefined, 'Location');
    let locationInputElement = createHtmlElements('input', { type: 'text', class: 'location' }, currentCatch.location);
    let fourHrElement = createHtmlElements('hr');

    let baitLabelElement = createHtmlElements('label', undefined, 'Bait');
    let baitInputElement = createHtmlElements('input', { type: 'text', class: 'bait' }, currentCatch.bait);
    let fiveHrElement = createHtmlElements('hr');

    let captureTimeLabelElement = createHtmlElements('label', undefined, 'Capture Time');
    let captureTimeInputElement = createHtmlElements('input', { type: 'number', class: 'captureTime' }, currentCatch.captureTime);
    let sixHrElement = createHtmlElements('hr');

    let updateButtonElement = createHtmlElements('button', { disabled: true, class: 'update' }, 'Update');
    updateButtonElement.addEventListener('click', updateCatch);
    updateButtonElement.disabled = localStorage.getItem('userId') !== currentCatch._ownerId;

    let deleteButtonElement = createHtmlElements('button', { disabled: true, class: 'delete' }, 'Delete');
    deleteButtonElement.addEventListener('click', deleteCatch);
    deleteButtonElement.disabled = localStorage.getItem('userId') !== currentCatch._ownerId;

    let catchDivElement = createHtmlElements('div', { class: 'catch' },
        anglerLableElement, anglerInputElement, firstHrElement, weightLabelElement, weightInputElement, secondHrElement, speciesLabelElement, speciesInputElement,
        thirdHrElement, locationLabelElement, locationInputElement, fourHrElement, baitLabelElement, baitInputElement, fiveHrElement, captureTimeLabelElement,
        captureTimeInputElement, sixHrElement, updateButtonElement, deleteButtonElement);

    catchDivElement.dataset.id = currentCatch._id;
    catchDivElement.dataset.ownerId = currentCatch._ownerId;

    return catchDivElement;
}


function createHtmlElements(tagName, attributes, ...content) {
    let element = document.createElement(tagName);
    let valueOfElement = content[0];

    if (content.length === 1 && typeof (valueOfElement) !== 'object') {
        if (['input', 'textarea'].includes(tagName)) {
            element.value = valueOfElement;
        } else {
            element.textContent = valueOfElement;
        }
    } else {
        element.append(...content);
    }

    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        })
    }

    return element;
}