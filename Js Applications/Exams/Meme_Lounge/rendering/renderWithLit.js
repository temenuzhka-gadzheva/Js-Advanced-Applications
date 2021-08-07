import { render } from "./../node_modules/lit-html/lit-html.js";

export class RenderWithLit {
    constructor() { }

    renderCreate(domEl) {
        return function (template) {
            render(template, domEl);
        }
    }
}