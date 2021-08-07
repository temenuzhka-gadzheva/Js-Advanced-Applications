import crud from "../../services/crud.js";
import { searchTemplate } from "./searchTemplate.js";

let _routing = undefined;
let _rendering = undefined;
let _crudOperating = undefined;

function toInitialization(routing, rendering, crudOperating) {
    _routing = routing;
    _rendering = rendering;
    _crudOperating = crudOperating;
}


async function whenSearchIsClicked(e) {
  


}

async function getView(context,e) {
    let inputFieldValue = document.getElementById('search-button').previousSibling.previousSibling.value;
    
    let year = Number(inputFieldValue);
    await crud.getAllMatchedCars(year);
let cars = whenSearchIsClicked(e);
console.log(cars);

    let item = {
        cars,
        whenSearchIsClicked
    }
    let template = searchTemplate(item);

    _rendering(template);
}

export default {
    getView,
    toInitialization
}