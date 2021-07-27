import { html } from "./../../node_modules/lit-html/lit-html.js";
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js";



export let whenUserLogged = (navigation) => html`
<div id="user">
        <a id="createLink" href="/create" class=${ifDefined(navigation.currView.startsWith('/create') ? 'active' : undefined)}>Create Furniture</a>
        <a id="profileLink" href="/myFurniture" class=${ifDefined(navigation.currView.startsWith('/myFurniture') ? 'active' : undefined)}>My Publications</a>
        <a id="logoutBtn" href="/logout" class=${ifDefined(navigation.currView.startsWith('/logout') ? 'active' : undefined)}>Logout</a>
    </div>
`;