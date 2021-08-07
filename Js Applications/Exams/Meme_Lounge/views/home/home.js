import { homeTemplate } from "./homeTemplate.js";


let _routing = undefined;
let _rendering = undefined;
let _authenticating = undefined;

function toInitialization(routing, rendering, authenticating) {
    _routing = routing;
    _rendering = rendering;
    _authenticating = authenticating;
}

async function getView() {
    let tempalte = homeTemplate();
    _rendering(tempalte);
}

export default {
    getView,
    toInitialization
}