import { html } from './../../node_modules/lit-html/lit-html.js';
import { descriptionEditField, imageEditField, makeEditField, materialEditField, modelEditField, priceEditField, yearEditField } from './editFieldForm/editFieldsFormTemplate.js';

export let editFormTemplate = (form) => html`
<form @submit=${form.whenFormSubmitted}>
    <div class="row space-top">
        <div class="col-md-4">
            ${makeEditField(form)}
            ${modelEditField(form)}
            ${yearEditField(form)}
            ${descriptionEditField(form)}
        </div>
        <div class="col-md-4">
            ${priceEditField(form)}
            ${imageEditField(form)}
            ${materialEditField(form)}
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
`;




export let editTemplate = (form) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
${editFormTemplate(form)};
`;