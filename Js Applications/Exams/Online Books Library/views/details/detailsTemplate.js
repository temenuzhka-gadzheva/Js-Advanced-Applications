import { html } from "./../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (item) => html`

    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${item.book.title}</h3>
            <p class="type">Type: ${item.book.type}</p>
            <p class="img"><img src=${item.book.imageUrl}></p>
            <div class="actions">
           ${item.isOwner 
               ? html` 
                   <a class="button"  href="/edit/${item.book._id}" >Edit</a>
                   <a class="button" href="/dashboard" @click=${(e) => item.whenDeleteIsCkicked(item.book._id,e)} >Delete</a>`
                : ''
            }
          

${ item.isLoggedUser == false  
                  ? html` 
                   <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                         <span id="total-likes">Likes: ${item.allLikes}</span> 
                    </div>` 
                  :      
            item.isOwner == false  
                  ? html` <a class="button" href="/details/${item.book._id}" @click=${(e) => item.whenLikeIsCkicked(item.book._id, item.user._id,e)} >Like</a>
                   <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                         <span id="total-likes">Likes: ${item.allLikes}</span> 
                    </div>` 
                  :  html`
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                         <span id="total-likes">Likes: ${item.allLikes}</span> 
                    </div>`
};

        <div class="book-description">
            <h3>Description:</h3>
            <p> ${item.book.description} </p>
        </div>
    </section>`