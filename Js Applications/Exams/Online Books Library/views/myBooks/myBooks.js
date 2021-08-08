import { myBooksTemplate } from "./myBooksTemplate.js";



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

    let books = [];
    if (user != undefined) {
        books = await _crudOperating.getUserBooks(user._id);
    }

    let item = {
        books,
        user
    }
    let template = myBooksTemplate(item);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}
