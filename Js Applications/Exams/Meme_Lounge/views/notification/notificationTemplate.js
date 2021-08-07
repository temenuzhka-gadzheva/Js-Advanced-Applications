import { html } from "./../../node_modules/lit-html/lit-html.js";


 export let notificationsTemplate = (item) => html`
   <div id="errorBox" class="notification">
        <span>${item.message}</span>
    </div>`;