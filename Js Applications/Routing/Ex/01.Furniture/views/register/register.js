import auth from "./../../services/auth.js";
import { registerTemplate } from "./registerTemplate.js";




async function whenFormSubmitted(context, e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let clientUser = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    await auth.register(clientUser);
    context.page.redirect('/dashboard')

}
async function getView(context) {

    let boundSubmitted = whenFormSubmitted.bind(null, context);

    let registerForm = {
        whenFormSubmitted: boundSubmitted
    }
    let template = registerTemplate(registerForm);
    context.viewRender(template);
}
export default {
    getView
}