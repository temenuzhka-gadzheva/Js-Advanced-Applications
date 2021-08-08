import { registerTemplate } from "./registerTemplate.js";

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


        let confirmPassword = formData.get('confirm-pass');
        if (confirmPassword.trim() === '') {
            _form.InvalidDataFields.push('Confirm password is required');
        }
        if (password.trim() != confirmPassword.trim()) {
            _form.InvalidDataFields.push('Passwords not matched!')
        }


        if (_form.InvalidDataFields.length > 0) {
            let template = registerTemplate(_form);
            // _notification.createNotification(_form.errorMessages.join('\n'));
            alert(_form.InvalidDataFields.join('\n'));
            return _rendering(template);
        }

        let userInfo = {
            email,
            password
        }

        await _authenticating.register(userInfo);
        _routing.redirect('/dashoboard');
    } catch (err) {
        alert(err);
    }

}

async function getView() {
    _form = {
        whenFormSubmitted,
        InvalidDataFields: []
    }
    let template = registerTemplate(_form);
    _rendering(template);
}

export default {
    getView,
    toInitialization
}