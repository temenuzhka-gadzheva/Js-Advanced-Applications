import { render } from "./../node_modules/lit-html/lit-html.js";

let dataContainer = undefined;
let navigationContainer = undefined;

function toInitialization(dataDomContainer, navigationDomContainer) {
    dataContainer = dataDomContainer;
    navigationContainer = navigationDomContainer;
}

async function viewRender(template) {
    render(template, dataContainer);
}

async function navigationRender(template) {
    render(template, navigationContainer);
}

 function decorateContext(context, next) {
    context.viewRender = viewRender;
    context.navigationRender = navigationRender;
    next();
}

export default{
    toInitialization,
    decorateContext,
    navigationRender,
    viewRender,
}