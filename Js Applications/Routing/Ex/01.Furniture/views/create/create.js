
import crudService from "../../services/crudService.js";
import { createTemplate } from "./createTemplate.js";


let createdForm = undefined;
async function whenFormSubmitted(context, e){
    e.preventDefault();
    let form  = e.target;
    let formData = new FormData(form);

    createdForm.validFields = {};

    let make = formData.get('make');
    if(make.length > 4) {
        createdForm.validFields.make = true;
    }

    let model = formData.get('model');
    if(model.length > 4) {
        createdForm.validFields.model = true;
    }

    let year = Number(formData.get('year'));
    if(year >= 1950 && year <= 2050) {
        createdForm.validFields.year = true;
    }

    let description = formData.get('description');
    if(description.length >= 10) {
        createdForm.validFields.description = true;
    }

    let price = Number(formData.get('price'));
    if(price > 0) {
        createdForm.validFields.price = true;
    }

    let img = formData.get('img');
    if(img.trim() !== '') {
        createdForm.validFields.img = true;
    }

    if(Object.keys(createdForm.validFields).length < 0){
        let template = createTemplate(createdForm);
        return context.viewRender(template);
    }

    let material = formData.get('material');

    let clientNewFurniture = {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    }

  await crudService.create(clientNewFurniture);
    context.page.redirect('/dashboard');
}

async function getView(context) {
    let boundSubmitted = whenFormSubmitted.bind(null, context);
    createdForm = {
        whenFormSubmitted: boundSubmitted,
        validFields: {
            make: true,
            model: true,
            year: true,
            description: true,
            price: true,
            img: true
        }
    }
    let template = createTemplate(createdForm);
    context.viewRender(template);
}

export default {
    getView
}