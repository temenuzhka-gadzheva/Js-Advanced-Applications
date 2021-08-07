import { createaTemplate } from "./createTemplate.js";

let _routing = undefined;
let _rendering = undefined;
let _crudOperating = undefined;
let _form = undefined;



function toInitialization(routing, rendering, crudOperating) {
    _routing = routing;
    _rendering = rendering;
    _crudOperating = crudOperating;
}

async function whenFormSubmitted(e) {
    e.preventDefault();
    try {
        let formTarget = e.target;
        let formData = new FormData(formTarget);
        _form.InvalidDataFields = [];

        let brand = formData.get('brand');
        if (brand.trim() === '') {
            _form.InvalidDataFields.push('Brand is required');
        }

        let model = formData.get('model');
        if (model.trim() === '') {
            _form.InvalidDataFields.push('Model is required');
        }


        let description = formData.get('description');
        if (description.trim() === '') {
            _form.InvalidDataFields.push('Description is required');
        }

        let year = formData.get('year');
        if (year.trim() === '' || year <= 0) {
            _form.InvalidDataFields.push('Year is required and should be positive number!');
        }
        String(year);

        let imageUrl = formData.get('imageUrl');
        if (imageUrl.trim() === '') {
            _form.InvalidDataFields.push('Image Url is required');
        }

        let price = formData.get('price');
        if (price.trim() === '' || price.trim() <= 0) {
            _form.InvalidDataFields.push('Price is required and should be positive number!');
        }


        if (_form.InvalidDataFields.length > 0) {
            let template = createaTemplate(_form);
            // _notification.createNotification(_form.errorMessages.join('\n'));
            alert(_form.InvalidDataFields.join('\n'));
            return _rendering(template);
        }
        year = Number(year);
        price = Number(price);
        let carInfo = {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
        }
        console.log(carInfo);

        await _crudOperating.create(carInfo);
        _routing.redirect('/listings');
    } catch (err) {
        alert(err);
    }

}

async function getView() {
    _form = {
        whenFormSubmitted,
        InvalidDataFields: []
    }
    let template = createaTemplate(_form);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}
