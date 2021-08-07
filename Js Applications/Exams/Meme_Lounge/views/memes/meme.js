import { memesTemplate } from "./memesTemplate.js";

let _routing = undefined;
let _rendering = undefined;
let _crudOperating = undefined;

function toInitialization(routing, rendering, crudOperating) {
    _routing = routing;
    _rendering = rendering;
    _crudOperating = crudOperating;

}

async function getView() {
    let allMemes = await _crudOperating.getAll();
console.log(allMemes);
    let template = memesTemplate(allMemes);

    console.log(template);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}