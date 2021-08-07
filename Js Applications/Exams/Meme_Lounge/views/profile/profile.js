import { profileTemplate } from "./profileTemplate.js";

let _routing = undefined;
let _rendering = undefined;
let _crudOperating = undefined;

function toInitialization(routing, rendering, crudOperating) {
    _routing = routing;
    _rendering = rendering;
    _crudOperating = crudOperating;
}

async function getView(context) {
    let user = context.user;
    let allMemes = [];

    if (user !== undefined) {
        allMemes = await _crudOperating.getUserMemes(user._id);
    }

    let item = {
        allMemes,
        user
    }

    let template = profileTemplate(item);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}