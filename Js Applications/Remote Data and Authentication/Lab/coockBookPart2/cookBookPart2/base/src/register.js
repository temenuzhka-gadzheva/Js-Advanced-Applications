let formElement = document.querySelector('form');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    Submitted([...formData.entries()]
        .reduce((p, [k, v]) =>
            Object.assign(p, { [k]: v }), {}));
})

async function Submitted(data) {
    if (data.rePass != data.password) {
        return console.log('Password is not same!!!');
    }
    let info = JSON.stringify({
        email: data.email,
        password: data.password
    });

    let registerUrl = 'http://localhost:3030/users/register'
    return fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: info
    })
        .then(response => {

            if (respone.status != 200) {
                throw new Error('Not found!')
            }
            return response.json()
        })
        .then(data => {

            sessionStorage.setItem('authToken', data.accessToken);
            window.location.pathname = 'index.html';
        })
        .then(error => {
            console.log(error.message);
        })
}