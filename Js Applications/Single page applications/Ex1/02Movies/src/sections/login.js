import viewSections from "../viewSections.js";
import auth from "../authentication/auth.js";

let loginSection = undefined;

export function initialization(htmlSection) {
    loginSection = htmlSection;
    let loginForm = loginSection.querySelector('form');

    loginForm.addEventListener('submit', createLoginRequest);
}


async function createLoginRequest(e) {
    e.preventDefault();
    try {
        let loginForm = e.target;
        let formData = new FormData(loginForm);

        let email = formData.get('email');
        let password = formData.get('password');
      
        let loginUser = {
            email,
            password
        };

        await auth.login(loginUser);
        loginForm.reset();
        
        viewSections.navigateTo('home');
    } catch (error) {

        alert(error);
    }
}

export function getView() {
    return loginSection;
}

let loginPage = {
    initialize: initialization,
    getView
}

export default loginPage;