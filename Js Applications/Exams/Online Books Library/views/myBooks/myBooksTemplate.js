import { html } from "./../../node_modules/lit-html/lit-html.js";

export let myBooksTemplate = (item) => html`

        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
        ${ item.books.length > 0 
            ? html`
                <ul class="my-books-list"> 
                   ${item.books.map(x => bookTemplate(x))}
                </ul> `
            : noBooksTemplate()
         }
        </section>`;

let bookTemplate = (book) => html`
        <li class="otherBooks">
            <h3>${book.title}</h3>
            <p>Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <a class="button" href="/details/${book._id}">Details</a>
        </li>
`;

 let noBooksTemplate = () =>html`
     <p class="no-books">No books in database!</p> 
 `;