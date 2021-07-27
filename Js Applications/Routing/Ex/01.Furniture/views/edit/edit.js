
import crudService from "../../services/crudService.js";
import { editTemplate } from "./editTemplate.js";

let editForm = undefined;

async function whenFormSubmitted(context, id, e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    editForm.validFields = {};

    let make = formData.get('make');
    if (make.length > 4) {
        editForm.validFields.make = true;
    }

    let model = formData.get('model');
    if (model.length > 4) {
        editForm.validFields.model = true;
    }

    let year = Number(formData.get('year'));
    if (year >= 1950 && year <= 2050) {
        editForm.validFields.year = true;
    }

    let description = formData.get('description');
    if (description.length >= 10) {
        editForm.validFields.description = true;
    }

    let price = Number(formData.get('price'));
    if (price > 0) {
        editForm.validFields.price = true;
    }

    let img = formData.get('img');
    if (img.trim() !== '') {
        editForm.validFields.img = true;
    }

    if (Object.keys(editForm.validFields).length < 0) {
        let template = editTemplate(editForm);
        return context.viewRender(template);
    }

    let material = formData.get('material');

    let clientFurnitureToUpdate = {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    }

    await crudService.update(clientFurnitureToUpdate, id);
    context.page.redirect('/dashboard');
}

async function getView(context) {
    let id = context.params.id;


    let clientFurnitureToUpdated = await crudService.get(id);

    let boundSubmitted = whenFormSubmitted.bind(null, context, id);
    editForm = {
        whenFormSubmitted: boundSubmitted,
        values: {
            make: clientFurnitureToUpdated.make,
            model: clientFurnitureToUpdated.model,
            year: clientFurnitureToUpdated.year,
            description: clientFurnitureToUpdated.description,
            price: clientFurnitureToUpdated.price,
            img: clientFurnitureToUpdated.img,
            material: clientFurnitureToUpdated.material,
        },
        validFields: {}
    }
    let template = editTemplate(editForm);
    context.viewRender(template);
}

export default {
    getView
}