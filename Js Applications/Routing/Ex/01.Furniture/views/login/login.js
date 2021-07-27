import auth from "./../../services/auth.js";
import { loginTemplate } from "./loginTemplate.js";

async function whenFormSubmitted(context, e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let clientUser = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    if (email != formData.get('email') || password != formData.get('password')) {
        alert('No user with this email, please register now!');
        context.page.redirect('/register')
    }
    await auth.login(clientUser);
    context.page.redirect('/dashboard')


}


async function getView(context) {

    let boundSubmitted = whenFormSubmitted.bind(null, context);

    let loginForm = {
        whenFormSubmitted: boundSubmitted
    }
    let template = loginTemplate(loginForm);
    context.viewRender(template);
}
export default {
    getView
}