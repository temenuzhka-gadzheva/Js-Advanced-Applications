import { html } from "./../../node_modules/lit-html/lit-html.js";
import { registerFormTemplate } from "./registerForm/registerFormTemplate.js";

export let registerTemplate = (form) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    ${registerFormTemplate(form)}
</div>
`;