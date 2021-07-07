async function solution() {

    let mainElement = document.querySelector('#main');

    this.content = {};

    let allArticles = await articles();
    let allId = allArticles.map(id => id._id);

    for (const id of allId) {
        content[id] = await articleContent(id);
    }

    allArticles.map(createAccordions).forEach(el => {
        mainElement.appendChild(el);
    });


}
window.addEventListener('load',solution());

async function articles() {
    let urlElement = `http://localhost:3030/jsonstore/advanced/articles/list`;

    let response = await fetch(urlElement);
    let data = await response.json();

    return data;
}


async function articleContent(_id) {
    let baseUrl = `http://localhost:3030/jsonstore/advanced/articles/details/`;

    let response = await fetch(`${baseUrl}${_id}`)
    let data = await response.json();
    return data.content;
}


function createAccordions({ _id, title }) {

    let accordionDivElement = document.createElement('div');
    accordionDivElement.setAttribute('class', 'accordion');


    let headDivElement = document.createElement('div');
    headDivElement.setAttribute('class', 'head');


    let spanElement = document.createElement('span');
    spanElement.textContent = `${title}`;

    let moreButtonElement = document.createElement('button');
    moreButtonElement.setAttribute('class', 'button');
    moreButtonElement.setAttribute('id', `${_id}`);
    moreButtonElement.textContent = 'More';

    headDivElement.appendChild(spanElement);
    headDivElement.appendChild(moreButtonElement);
    //
    let extraDivElement = document.createElement('div');
    extraDivElement.setAttribute('class', 'extra');

    let pElement = document.createElement('p');
    pElement.textContent = this.content[_id];

    extraDivElement.appendChild(pElement);

    accordionDivElement.appendChild(headDivElement);
    accordionDivElement.appendChild(extraDivElement);

    moreButtonElement.addEventListener('click', (e) => {

        if (e.target.textContent === 'More') {
            extraDivElement.style.display = 'block';
            e.target.textContent = 'Less';
        } else {
            extraDivElement.style.display = 'none';
            e.target.textContent = 'More';
        }
    });

    return accordionDivElement;

}


