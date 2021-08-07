import { detailsTemplate } from "./detailsTemplate.js";

let _routing = undefined;
let _rendering = undefined;
let _crudOperating = undefined;

function toInitialization(routing, rendering, crudOperating) {
    _routing = routing;
    _rendering = rendering;
    _crudOperating = crudOperating;
}

async function whenDeleteIsCkicked(id, e) {
    try {
        await _crudOperating.del(id);
        _routing.redirect(`/memes`);
    } catch (err) {
        alert(err);
    }
}

async function getView(context) {
    let id = context.params.id;
    let meme = await _crudOperating.get(id);
   
    let user = context.user;
    let isOwner = false;

    if (user !== undefined && user._id === meme._ownerId) {
        isOwner = true;
    }
    let item = {
        meme,
        whenDeleteIsCkicked,
        isOwner
    };
    let template = detailsTemplate(item);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}