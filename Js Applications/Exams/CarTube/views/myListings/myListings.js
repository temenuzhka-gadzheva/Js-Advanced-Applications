


import { myListingsTemplate } from "./myListingsTemplate.js";


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

    let userCars = [];
    if (user != undefined) {
        userCars = await _crudOperating.getUserCars(user._id);
    }

    let item = {
        cars: userCars,
        user
    }
    let template = myListingsTemplate(item);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}
