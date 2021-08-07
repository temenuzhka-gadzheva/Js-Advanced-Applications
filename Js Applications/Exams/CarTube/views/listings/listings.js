import { listingsTemplate } from "./listingsTemplate.js";


let _routing = undefined;
let _rendering = undefined;
let _crudOperating = undefined;

function toInitialization(routing, rendering, crudOperating) {
    _routing = routing;
    _rendering = rendering;
    _crudOperating = crudOperating;

}

async function getView() {
    let allCars = await _crudOperating.getAllCars();

    let template = listingsTemplate(allCars);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}