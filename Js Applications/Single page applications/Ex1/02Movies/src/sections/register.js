import auth from "../authentication/auth.js";
import viewSections from "../viewSections.js";

let registerSection = undefined;

export function initialization(htmlSection) {
    registerSection = htmlSection;
    let form = registerSection.querySelector('form');
    form.addEventListener('submit', createRegisterRequest);
}


async function createRegisterRequest(e) {
    e.preventDefault();
    try {
        let refisterForm = e.target;
        let formData = new FormData(refisterForm);

        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPassword');

        if (email.trim() === '' || password.trim() === '') {
            alert('Fields cannot be empty');
            return;
        }
/*
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
*/
        if (password !== repeatPassword) {
            alert('Passwords  are not correct! Please, try again!');
            return;
        }

        let registerUser = {
            email,
            password
        };


        await auth.register(registerUser);
        refisterForm.reset();
        
        viewSections.navigateTo('home');
    } catch (error) {
       
        alert(error.message);
    }
}

export async function getView() {
    return registerSection;
}

let registerPage = {
    initialize: initialization,
    getView
}

export default registerPage;