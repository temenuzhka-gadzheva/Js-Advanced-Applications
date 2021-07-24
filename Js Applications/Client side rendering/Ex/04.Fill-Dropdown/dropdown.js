import { render } from './../node_modules/lit-html/lit-html.js';
import { allOptionsTemplate } from './templates/optionsTemplate.js';

let menuSelect = document.getElementById('menu');
let inputText = document.getElementById('itemText');

let optionForm = document.getElementById('add-option-form');
optionForm.addEventListener('submit', addItem);

let submitButton = document.getElementById('submit');
submitButton.disabled = true;
let options = [];

loadOptions();

async function loadOptions() {

    let url = `http://localhost:3030/jsonstore/advanced/dropdown`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            options = Object.values(data);
            render(allOptionsTemplate(options), menuSelect);
            submitButton.disabled = false;
        });
}


async function addItem(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    if (formData.get('text') === '') {
        alert('It should have write text!');
        return;
    }
    let myNewOption = {
        text: formData.get('text')
    }

    let url = `http://localhost:3030/jsonstore/advanced/dropdown`;

    let createResponse = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(myNewOption)
    });

    if (createResponse.ok) {
        let createdOption = await createResponse.json();
        options.push(createdOption);
        render(allOptionsTemplate(options), menuSelect);
        inputText.value = '';
        alert('Complete added!');
      
    }

}
