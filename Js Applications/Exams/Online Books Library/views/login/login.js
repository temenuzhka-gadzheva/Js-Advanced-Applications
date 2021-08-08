import { loginTemplate } from "./loginTemplate.js";

let _routing = undefined;
let _rendering = undefined;
let _authenticating = undefined;
let _form = undefined;


function toInitialization(routing, rendering, authenticating) {
    _routing = routing;
    _rendering = rendering;
    _authenticating = authenticating;

}

async function whenFormSubmitted(e) {
    e.preventDefault();
    try {
        let formTarget = e.target;
        let formData = new FormData(formTarget);
        _form.InvalidDataFields = [];

        let email = formData.get('email');
        if (email.trim() === '') {
            _form.InvalidDataFields.push('Email is required');
        }

        let password = formData.get('password');
        if (password.trim() === '') {
            _form.InvalidDataFields.push('Password is required');
        }

        if (_form.InvalidDataFields.length > 0) {
            let template = loginTemplate(_form);
            // _notification.createNotification(_form.errorMessages.join('\n'));
            alert(_form.InvalidDataFields.join('\n'));
            return _rendering(template);
        }

        let userInfo = {
            email,
            password
        }

        await _authenticating.login(userInfo);
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
    let template = loginTemplate(_form);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}
