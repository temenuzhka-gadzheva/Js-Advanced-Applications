import { createTemplate } from "./createTemplate.js";

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

        let title = formData.get('title');
        if (title.trim() === '') {
            _form.InvalidDataFields.push('Title is required');
        }


        let description = formData.get('description');
        if (description.trim() === '') {
            _form.InvalidDataFields.push('Description is required');
        }


        let imageUrl = formData.get('imageUrl');
        if (imageUrl.trim() === '') {
            _form.InvalidDataFields.push('Image Url is required');
        }

        let type = formData.get('type');
        if (type.trim() === '') {
            _form.InvalidDataFields.push('Type is required');
        }


        if (_form.InvalidDataFields.length > 0) {
            let template = createaTemplate(_form);
            // _notification.createNotification(_form.errorMessages.join('\n'));
            alert(_form.InvalidDataFields.join('\n'));
            return _rendering(template);
        }

        let bookInfo = {
            title,
            description,
            imageUrl,
            type
        }

        await _crudOperating.create(bookInfo);
        _routing.redirect('/dashboard');
    } catch (err) {
        alert(err);
    }

}

async function getView() {
    _form = {
        whenFormSubmitted,
        InvalidDataFields: []
    }
    let template = createTemplate(_form);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}
