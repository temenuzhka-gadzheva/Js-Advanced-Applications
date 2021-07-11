
let loadBooksButtonElement = document.querySelector('#loadBooks');
loadBooksButtonElement.addEventListener('click', loadBooks);

let tBodyBookElement = document.querySelector('#books-table tbody');
tBodyBookElement.querySelectorAll('tr').forEach(tr => tr.remove());

let bookFormElement = document.querySelector('#form');
bookFormElement.addEventListener('submit', submitFormHandled);


function editHandled(e) {
    let currentBook = e.target.closest('.book');
    let currentTitleElement = currentBook.querySelector('.title');
    let currentAuthorElement = currentBook.querySelector('.author');


    let h3FormElement = bookFormElement.querySelector('h3');
    h3FormElement.textContent = 'Edit Form';
    let submitButtonElement = bookFormElement.querySelector('#submit');
    submitButtonElement.textContent = 'Save';

    submitButtonElement.addEventListener('click', () => {
        submitButtonElement.textContent = 'Submit';
    });

    bookFormElement.dataset.entryId = currentBook.dataset.id;
    bookFormElement.dataset.isEdit = true;

    let titleInputElement = bookFormElement.querySelector('input[name="title"]');
    let authorInputElement = bookFormElement.querySelector('input[name="author"]');
    titleInputElement.value = currentTitleElement.textContent;
    authorInputElement.value = currentAuthorElement.textContent;
}


async function submitFormHandled(e) {
    e.preventDefault();
    let formElement = e.currentTarget;
    let formDataElement = new FormData(formElement);

    if (formElement.dataset.isEdit !== undefined) {
        let id = formElement.dataset.entryId;
        editBook(formDataElement, id);
    } else {
        createBook(formDataElement);
    }
}

async function deleteBook(e) {
    let deletedBook = e.target.closest('.book');
    let deletedBookId = deletedBook.dataset.id;
    let deletedUrl = `http://localhost:3030/jsonstore/collections/books/${deletedBookId}`;

    let titleInputElement = bookFormElement.querySelector('input[name="title"]');
    let authorInputElement = bookFormElement.querySelector('input[name="author"]');
    titleInputElement.value = "";
    authorInputElement.value = "";
    fetch(deletedUrl, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            deletedBook.remove();
        }
        return response.json();
    })
}

async function editBook(formData, id) {
    let editBook = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    let postUrl = `http://localhost:3030/jsonstore/collections/books/${id}`;
    fetch(postUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'applicatio/json'
        },
        body: JSON.stringify(editBook)
    }).then(response => response.json())
        .then(data => {
            let myEditedBook = tBodyBookElement.querySelector(`tr.book[data-id="${id}"]`);
            let myEditedHTMLBook = createHtmlBook(data, data._id);
            myEditedBook.replaceWith(myEditedHTMLBook);
        })


}

async function createBook(formData) {
    let newBook = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    let postUrl = 'http://localhost:3030/jsonstore/collections/books';

    fetch(postUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'applicatio/json'
        },
        body: JSON.stringify(newBook)
    }).then(response => response.json())
        .then(data => {
            let createdHtmlBook = createHtmlBook(data, data._id);
            tBodyBookElement.appendChild(createdHtmlBook);
        })
}

async function loadBooks() {
    let getUrl = 'http://localhost:3030/jsonstore/collections/books';

    fetch(getUrl)
        .then(response => response.json())
        .then(data => {
            tBodyBookElement.querySelectorAll('tr').forEach(tr => tr.remove());
            Object.keys(data).forEach(key => {
                let htmlBook = createHtmlBook(data[key], key);
                tBodyBookElement.appendChild(htmlBook);
            })
        })
}



function createHtmlBook(book, id) {
    let tdTitleElement = createHTMLElement('td', { class: 'title' }, book.title);
    let tdAuthorNameElement = createHTMLElement('td', { class: 'author' }, book.author);

    let editButtonElement = createHTMLElement('button', undefined, 'Edit');
    editButtonElement.addEventListener('click', editHandled);

    let deleteButtonElement = createHTMLElement('button', undefined, 'Delete');
    deleteButtonElement.addEventListener('click', deleteBook);

    let tdButtonsElements = createHTMLElement('td', undefined, editButtonElement, deleteButtonElement);
    let trEelement = createHTMLElement('tr', { class: 'book' }, tdTitleElement, tdAuthorNameElement, tdButtonsElements);

    trEelement.dataset.id = id;

    return trEelement;
}

function createHTMLElement(tagName, attributes, ...content) {

    let element = document.createElement(tagName);
    let valueElement = content[0];

    if (content.length === 1 && typeof (valueElement) !== 'object') {
        if (['input', 'textarea'].includes(tagName)) {
            element.value = valueElement;
        } else {
            element.textContent = valueElement;
        }
    } else {
        element.append(...content);
    }

    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        })
    }

    return element;
}