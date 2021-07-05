
function recipesList() {

    let mainElement = document.querySelector('main');

    fetch(`http://localhost:3030/jsonstore/cookbook/recipes`)
        .then(response => {
            if (response.ok === false) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(recipies => {
            mainElement.textContent = '';

            Object.values(recipies)
                .map(createPreview)
                .forEach(r => mainElement.appendChild(r));
        })
        .catch(error => console.error(error));

}
// когато се зареди страницата
window.addEventListener('load', () => recipesList());


// функция, която приема тип на елемента, атрибути, и съдържание
// функция, която създава елементи
function createElements(type, attributes, ...content) {

    // създава елемента от съответния тип
    let createElementFromType = document.createElement(type);
    for (let [attr, value] of Object.entries(attributes || {})) {

        if (attr.substring(0, 2) == 'on') {
            createElementFromType.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            createElementFromType[attr] = value;
        }
    }
    // проверка дали съдържанието не е масив
    content = content.reduce((acc, c) => acc.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {

        if (typeof e === 'string' || typeof e === 'number') {
            let node = document.createTextNode(e);
            createElementFromType.appendChild(node);
        } else {
            createElementFromType.appendChild(e);
        }

    });
    return createElementFromType;
}

function createPreview(reciepe) {

    let resultElement = createElements('article', { className: 'preview' },
        createElements('div', { className: 'title' }, createElements('h2', {}, reciepe.name)),
        createElements('div', { className: 'small' }, createElements('img', { src: reciepe.img }))
    );

    resultElement.addEventListener('click', () => getDetails(reciepe._id,resultElement));

    return resultElement;
}

async function getDetails(id,preview) {
    let reciepeUrl = `http://localhost:3030/jsonstore/cookbook/details/${id}`;
    let response = await fetch(reciepeUrl);
    let data = await response.json();
    console.log(data);
// създаване на картичката с информацията
    let resultElement = createElements('article', {},
        createElements('h2', {},data.name),
        createElements('div', { className: 'band' },
            createElements('div', { className: 'thumb' }, createElements('img', { src: data.img })),
            createElements('div', { className: 'ingredients' },
                createElements('h3', {}, 'Ingredients:'),
                createElements('ul', {}, data.ingredients.map(i => createElements('li', {}, i)))
            )
        ),
        createElements('div', { className: 'description' },
            createElements('h3', {}, 'Preparation:'),
            data.steps.map(s => createElements('p',{},s))
        )
   
    );
    // заменя стария резултат с новия
    preview.parentNode.replaceChild(resultElement,preview);
}


