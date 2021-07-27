import { html } from './../../node_modules/lit-html/lit-html.js';
import { descriptionField, imageField, makeField, materialField, modelField, priceField, yearField } from './formFields/formFieldsTemplate.js';


export let createFormTemplate = (form) => html`
<form @submit=${form.whenFormSubmitted}>
    <div class="row space-top">
        <div class="col-md-4">
            ${makeField(form)}
            ${modelField(form)}
            ${yearField(form)}
        </div>
        <div class="col-md-4">
            ${descriptionField(form)}
            ${priceField(form)}
            ${imageField(form)}
            ${materialField(form)}
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>
`;

export let createTemplate = (form) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
${createFormTemplate(form)}
       
`;