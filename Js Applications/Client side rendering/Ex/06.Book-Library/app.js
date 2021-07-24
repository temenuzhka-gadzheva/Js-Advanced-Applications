import { render, html } from './../node_modules/lit-html/lit-html.js';
import { addFormTemplate, editFormTemplate} from './templates/bookTemplates.js';

let formsSections = document.querySelector('#form-container');

let bookTemplate = (id, book) => html `
<tr id=${id}>
    <td>${book.title}</td>
    <td>${book.author}</td>
        <td>
            <button @click=${clickEdit}>Edit</button>
            <button @click=${clickDelete}>Delete</button>
        </td>
</tr>
`;


window.onload = render(addFormTemplate(), formsSections);
let loadBooksButton = document.querySelector('#loadBooks');
loadBooksButton.addEventListener('click', loadBooks);

async function loadBooks() {
    let url = 'http://localhost:3030/jsonstore/collections/books';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let obj = Object.entries(data);
            let result = obj.map(([id, data]) => bookTemplate(id, data));
            let tbody = document.querySelector('tbody');
            return render(result, (tbody));
        })
}

let addFormSection = document.getElementById('add-form');

addFormSection.addEventListener('submit', createBooks);

async function createBooks(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let title = formData.get('title');
    let author = formData.get('author');
    let url = 'http://localhost:3030/jsonstore/collections/books';

    await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, title })
    });
    loadBooks();
    e.target.reset();
}


async function clickEdit(e){
    let id = e.target.closest('tr').id;
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`
    let response = await fetch(url);
    let book = await response.json();

    render(editFormTemplate(book),formsSections);
    document.getElementById('edit-form').dataset.id = id;
    let editForm = document.getElementById('edit-form');
    editForm.addEventListener('submit', whenEditClicked);
}

async function clickDelete(e){
    let id = e.target.closest('tr').id;

    let url = `http://localhost:3030/jsonstore/collections/books/${id}`
    await fetch(url,{
        method: 'delete'
    });
    loadBooks();
}

async function whenEditClicked(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let title = formData.get('title');
    let author = formData.get('author');
    let id = e.target.dataset.id;
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;
   
    await fetch(url,{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({author,title})
    });

    render(addFormTemplate(), formsSections);
    loadBooks();
    e.target.reset();
}