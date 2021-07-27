import {html} from "./../../node_modules/lit-html/lit-html.js";
import { loginForm } from "./loginForm/loginFormTemplate.js";

export let loginTemplate = (form) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    ${loginForm(form)}
</div>
`;