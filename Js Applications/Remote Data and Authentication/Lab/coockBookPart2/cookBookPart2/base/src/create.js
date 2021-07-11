let formElement = document.querySelector('form');

formElement.addEventListener('submit', Submitted);

async function Submitted(e) {

    e.preventDefault();
    let formData = new FormData(e.target);

    let info = JSON.stringify({
        name: formData.name,
        img: formData.img,
        ingredients: formData.ingredients.split('\n')
            .map(i => i.trim())
            .filter(i => i != ''),
        steps: formData.steps
            .split('\n')
            .map(i => i.trim())
            .filter(i => i != '')
    });

    let authToken = sessionStorage.getItem('authToken');

    if (authToken === null) {
        return window.location.pathname = 'index.html';
    }

    let createRecipeUrl = `http://localhost:3030/data/recipes`;
    return fetch(createRecipeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': authToken
        },
        body: info
    })
        .then(response => {
            if (response.status != 200) {

                throw new Error('Not found!!');
            }
            window.location.pathname = 'index.html';


        })
        .catch(error => console.log(error.message))

}