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
        _routing.redirect('/dashboard');
    } catch (err) {
        alert(err);
    }
}

async function whenLikeIsCkicked(bookId, userId, e) {
    try {
        await _crudOperating.getLike(bookId, userId);

        _routing.redirect(`/details/${bookId}`);
    } catch (err) {
        alert(err);
    }
}

async function getView(context) {
    let id = context.params.id;
    let book = await _crudOperating.get(id);
    let allLikes = await _crudOperating.getTotalLikes(id);
    let user = context.user;
    let isOwner = false;
    if (user !== undefined && user._id === book._ownerId) {
        isOwner = true;
    }
let isLoggedUser = false;
    if (user != undefined) {
        isLoggedUser = true;
    }
    let item = {
        book,
        user,
        whenDeleteIsCkicked,
        whenLikeIsCkicked,
        isLoggedUser,
        isOwner,
        allLikes,
      

    };
    let template = detailsTemplate(item);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}