import { render } from "./../node_modules/lit-html/lit-html.js";
import{myTemplate} from './templates/townTemplate.js'

let form = document.querySelector('#towns-form');
form.addEventListener('submit', viewTowns);

let rootElement = document.querySelector('#root');

function viewTowns(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let townsNames = formData.get('towns');
    let towns = townsNames.split(', ');
    // първият параметър е самият template, а вторият е мястото, където трябва да се закачи
    render(myTemplate(towns), rootElement);

}

