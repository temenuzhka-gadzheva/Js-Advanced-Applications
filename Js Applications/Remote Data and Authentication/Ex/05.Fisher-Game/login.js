let registerFormElement = document.getElementById('register-form');
registerFormElement.addEventListener('submit', register);


async function register(e) {

    e.preventDefault();
    let formElement = e.target;
    let formDataElement = new FormData(formElement);

    let passwordElement = formDataElement.get('password');
    let repeatPasswordElement = formDataElement.get('rePass');

    if (passwordElement !== repeatPasswordElement) {

        throw new Error('Passwords not maach!')
    }

    let registerUser = {
        email: formDataElement.get('email'),
        password: passwordElement
    }


    let registerUrl = 'http://localhost:3030/users/register';

    fetch(registerUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerUser)
    }).then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('userId', data._id);
            location.assign('./index.html');
        })
}


let loginFormElement = document.getElementById('login-form');
loginFormElement.addEventListener('submit', login);



async function login(e) {
    e.preventDefault();
    let formElement = e.target;
    let formDataElement = new FormData(formElement);
    let passwordElement = formDataElement.get('password');

    let loginUser = {
        email: formDataElement.get('email'),
        password: passwordElement
    }
    let loginUrl = 'http://localhost:3030/users/login';
    fetch(loginUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    }).then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('userId', data._id);
            location.assign('./index.html');
        })
}