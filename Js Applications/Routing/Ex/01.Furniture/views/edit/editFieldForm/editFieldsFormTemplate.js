import { html } from "./../../../node_modules/lit-html/lit-html.js";

export let makeEditField = (form) => html`
<div class="form-group">
    <label class="form-control-label" for="new-make">Make</label>
    <input class="form-control${form.validFields.make ? ' is-valid' : ' is-invalid'}" id="new-make" type="text"
        name="make" .value=${form.values.make}>
</div>`;

export let modelEditField = (form) => html`
<div class="form-group has-success">
    <label class="form-control-label" for="new-model">Model</label>
    <input class="form-control${form.validFields.model ? ' is-valid' : ' is-invalid'}" id="new-model" type="text"
        name="model" .value=${form.values.model}>
</div>`;

export let yearEditField = (form) => html` 
<div class="form-group has-danger">
    <label class="form-control-label" for="new-year">Year</label>
    <input class="form-control${form.validFields.year ? ' is-valid' : ' is-invalid'}" id="new-year" type="number"
        name="year" .value=${form.values.year}>
</div>`;

export let descriptionEditField = (form) => html`
<div class="form-group">
    <label class="form-control-label" for="new-description">Description</label>
    <input class="form-control${form.validFields.description ? ' is-valid' : ' is-invalid'}" id="new-description"
        type="text" name="description" .value=${form.values.description}>
</div>`;

export let priceEditField = (form) => html`
<div class="form-group">
    <label class="form-control-label" for="new-price">Price</label>
    <input class="form-control${form.validFields.price ? ' is-valid' : ' is-invalid'}" id="new-price" type="number"
        name="price" .value=${form.values.price}>
</div>`;

export let imageEditField = (form) => html`
    <div class="form-group">
        <label class="form-control-label" for="new-image">Image</label>
        <input class="form-control${form.validFields.img ? ' is-valid' : ' is-invalid'}" id="new-image" type="text"
            name="img" .value=${form.values.img}>
    </div>`;

export let materialEditField = (form) => html`
    <div class="form-group">
        <label class="form-control-label" for="new-material">Material (optional)</label>
        <input class="form-control" id="new-material" type="text" name="material" .value=${form.values.material}>
    </div>`;