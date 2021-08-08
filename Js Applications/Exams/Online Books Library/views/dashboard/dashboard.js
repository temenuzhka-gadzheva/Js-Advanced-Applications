import { dashboardTemplate } from "./dashboardTemplate.js";



let _routing = undefined;
let _rendering = undefined;
let _crudOperating = undefined;

function toInitialization(routing, rendering, crudOperating) {
    _routing = routing;
    _rendering = rendering;
    _crudOperating = crudOperating;

}

async function getView() {
    let allBooks = await _crudOperating.getAll();

    let template = dashboardTemplate(allBooks);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}