import { html } from "./../../node_modules/lit-html/lit-html.js";
import { ifDefined } from "./../node_modules/lit-html/directives/if-defined.js";
import { whenUserLogged } from "./navigationFromLoggedUsers/navigationFromLoggedUsersTemplate.js";
import { whenUserNotLogged } from "./navigationFromNotLoggedUsers/navigationFromNotLoggedUsersTemplate.js";


export let navigationTemplate = (navigation) => html`
<h1><a href="/">Furniture Store</a></h1>
<nav>
    <a id="catalogLink" href="/dashboard" class=${ifDefined(navigation.currView.startsWith('/dashboard') ? 'active' :
    undefined)}>Dashboard</a>
    ${navigation.isLoggedIn == true
        ? whenUserLogged(navigation)
        : whenUserNotLogged(navigation)
    }
</nav>`;


