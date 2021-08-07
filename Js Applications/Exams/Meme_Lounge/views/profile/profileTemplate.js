import { html } from "./../../node_modules/lit-html/lit-html.js";

export let profileTemplate = (item) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=${item.user.gender ==='female' ? '/images/female.png'
            : '/images/male.png' }>
        <div class="user-content">
            <p>Username: ${item.user.username}</p>
            <p>Email: ${item.user.email}</p>
            <p>My memes count: ${item.allMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">

    ${  item.allMemes.length > 0 
           ? item.allMemes.map(x => memeTemplate(x))
           : noMemeTemplate()
    }
   
    </div>
</section>`;

let memeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

let noMemeTemplate = () => html`
        <p class="no-memes">No memes in database.</p>`;