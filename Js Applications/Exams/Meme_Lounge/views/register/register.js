import notification from "../notification/notification.js";
import { registerTemplate } from "./registerTemplate.js";


let _routing = undefined;
let _rendering = undefined;
let _authenticating = undefined;
let _form = undefined;
let _notifications = undefined;

function toInitialization(routing, rendering, authenticating, notifications) {
    _routing = routing;
    _rendering = rendering;
    _authenticating = authenticating;
_notifications = notifications
}

async function whenFormSubmitted(e) {
    e.preventDefault();
    try {
        let formTarget = e.target;
        let formData = new FormData(formTarget);
        _form.InvalidDataFields = [];

        let username = formData.get('username');
        if (username.trim() === '') {
            _form.InvalidDataFields.push('Username is required');
        }

        let email = formData.get('email');
        if (email.trim() === '') {
            _form.InvalidDataFields.push('Email is required');
        }

        let password = formData.get('password');
        if (password.trim() === '') {
            _form.InvalidDataFields.push('Password is required');
        }


        let repeatPassword = formData.get('repeatPass');
        if (repeatPassword.trim() === '') {
            _form.InvalidDataFields.push('Repeat Password is required');
        }
        if (password.trim() != repeatPassword.trim()) {
            _form.InvalidDataFields.push('Passwords not matched!')
        }

        let gender = formData.get('gender');
        if (gender.trim() === '') {
            _form.InvalidDataFields.push('Gender is required');
        }


        if (_form.InvalidDataFields.length > 0) {
            let template = registerTemplate(_form);
             _notifications.creatingNotificationMsg(_form.InvalidDataFields.join('\n'));
           // alert(_form.InvalidDataFields.join('\n'));
            return _rendering(template);
        }

        let userInfo = {
            username,
            email,
            password,
            gender
        }

        await _authenticating.register(userInfo);
        _routing.redirect('/memes');
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