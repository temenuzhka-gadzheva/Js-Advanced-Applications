import { html } from "./../../node_modules/lit-html/lit-html.js";
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js";


export let whenUserNotLogged = (navigation) =>html`
<div id="guest">
    <a id="loginLink" href="/login" class=${ifDefined(navigation.currView.startsWith('/login') ? 'active' :
        undefined)}>Login</a>
    <a id="registerLink" href="/register" class=${ifDefined(navigation.currView.startsWith('/register') ? 'active' :
            undefined)}>Register</a>
</div>`;