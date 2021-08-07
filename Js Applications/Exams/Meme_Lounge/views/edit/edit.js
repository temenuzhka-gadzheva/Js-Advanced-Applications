import { editTemplate } from "./editTemplate.js";



let _routing = undefined;
let _rendering = undefined;
let _crudOperating = undefined;
let _form = undefined;
let _notifications = undefined;

function toInitialization(routing, rendering, crudOperating, notifications) {
    _routing = routing;
    _rendering = rendering;
    _crudOperating = crudOperating;
    _notifications = notifications;
}

async function whenFormSubmitted(id, e) {
    e.preventDefault();
    try {
        let formData = new FormData(e.target);
        _form.invalidFields = [];

        let title = formData.get('title');
        if (title.trim() === '') {
            _form.invalidFields.push('Title is required');
        }

        let description = formData.get('description');
        if (description.trim() === '') {
            _form.invalidFields.push('Description is required');
        }

        let imageUrl = formData.get('imageUrl');
        if (imageUrl.trim() === '') {
            _form.invalidFields.push('Image Url is required');
        }

        if (_form.invalidFields.length > 0) {
            let templateResult = editTemplate(_form);
            _notifications.creatingNotificationMsg(_form.invalidFields.join('\n'));
            // alert(_form.errorMessages.join('\n'));
            return _rendering(templateResult);
        }

        let meme = {
            title,
            description,
            imageUrl
        }
        await _crudOperating.edit(meme, id);
        _routing.redirect(`/details/${id}`);
    } catch (err) {
        alert(err);
    }

}

async function getView(context) {
    let id = context.params.id;
    let meme = await _crudOperating.get(id);

    _form = {
        whenFormSubmitted,
        invalidFields: [],
        meme
    }
    let template = editTemplate(_form);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}