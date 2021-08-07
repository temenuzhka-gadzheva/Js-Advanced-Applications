import { navigationTemplate } from "./navigationTemplate.js";


let _routing = undefined;
let _rendering = undefined;
let _authenticating = undefined;

function toInitialization(routing, rendering, authenticating) {
    _routing = routing;
    _rendering = rendering;
    _authenticating = authenticating;
}

async function logoutFunc() {
    await _authenticating.logout();
    _routing.redirect('/home');
}

async function getView(context, next) {
    let user = context.user;
    let username = user !== undefined ? user.username : undefined;

    let navigationItem = {
        isLogged: user !== undefined,
        username,
        logoutFunc
    }
    let template = navigationTemplate(navigationItem);
    _rendering(template);
    next();
}

export default {
    getView,
    toInitialization
}