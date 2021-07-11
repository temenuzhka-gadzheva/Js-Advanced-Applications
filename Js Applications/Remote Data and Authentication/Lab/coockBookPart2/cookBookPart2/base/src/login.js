let formElement = document.querySelector('form');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    Submitted([...formData.entries()]
        .reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
});

async function Submitted(data) {

    let info = JSON.stringify({
        email: data.email,
        password: data.password
    });
    let loginUrl = `http://localhost:3030/users/login`;
    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: info
    })
        .then(response => {
            if (response.status != 200) {
                throw new Error('Not found!')
            }
            return response.json();
        })
        .then(data => {
            sessionStorage.setItem('authToken', data.accessToken);
            window.location.pathname = 'index.html';
        })
        .catch(error => {
            console.log(error.message);
        })

}