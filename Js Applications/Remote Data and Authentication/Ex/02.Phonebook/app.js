function attachEvents() {
    let loadButtonElement = document.querySelector('#btnLoad');
    loadButtonElement.addEventListener('click', allPhoneBookInfo);

    let createButtonElement = document.querySelector('#btnCreate');
    createButtonElement.addEventListener('click', createPhoneInfo);
}

attachEvents();

async function allPhoneBookInfo() {

    let ulPhoneBookElement = document.querySelector('#phonebook');
    let urlLoad = 'http://localhost:3030/jsonstore/phonebook';

    let response = await fetch(urlLoad);
    let data = await response.json();

    ulPhoneBookElement.textContent = ''

    Object.values(data)
        .map(phoneInfo)
        .forEach(phoneEl => ulPhoneBookElement.appendChild(phoneEl));
}

async function createPhoneInfo() {
    let personNameElement = document.querySelector('#person').value;
    let phoneElement = document.querySelector('#phone').value;

    if (personNameElement && phoneElement) {

        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person: personNameElement, phone: phoneElement })
        });

        allPhoneBookInfo();
    } else {

        throw new Error('One or more fields are not completed');
    }
}

function phoneInfo({ person, phone, _id }) {

    let liElement = document.createElement('li');
    liElement.setAttribute('id', _id);
    liElement.textContent = `${person}: ${phone}`;

    let deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';

    deleteButtonElement.addEventListener('click', async function (e) {
        let deletedId = e.target.parentNode.id;
        let deleteUrl = `http://localhost:3030/jsonstore/phonebook/${deletedId}`;

        await fetch(deleteUrl, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        e.target.parentNode.remove();
    });
    liElement.append(deleteButtonElement);

    return liElement;
}