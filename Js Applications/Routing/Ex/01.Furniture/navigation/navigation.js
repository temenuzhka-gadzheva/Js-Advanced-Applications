import auth from "../services/auth.js";

import { navigationTemplate } from "./navigationTemplate.js";

function getView(context, next) {
    // context is context of request
    let navigation = {
        isLoggedIn: auth.isLoggedIn(),
        currView: context.pathname
    }

    let template = navigationTemplate(navigation);

    context.navigationRender(template);
    next();
}

export default {
    getView
}