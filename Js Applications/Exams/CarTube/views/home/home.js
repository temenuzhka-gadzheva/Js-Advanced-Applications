import { homeTempalte } from "./homeTemplate.js";


let _routing = undefined;
let _rendering = undefined;
let _authenticating = undefined;

function toInitialization(routing, rendering, authenticating) {
    _routing = routing;
    _rendering = rendering;
    _authenticating = authenticating;
}

async function getView() {
    let tempalte = homeTempalte();
    _rendering(tempalte);
}

export default {
    getView,
    toInitialization
}