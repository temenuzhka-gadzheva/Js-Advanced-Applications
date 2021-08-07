import { html } from "./../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (item) => html`
<section id="meme-details">
    <h1>Meme Title: ${item.meme.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src= ${item.meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p> ${item.meme.description}
            </p>

            ${item.isOwner == true 
                ? html` <a class="button warning" href="/edit/${item.meme._id}">Edit</a>
                        <button class="button danger" @click=${(e) => item.whenDeleteIsCkicked(item.meme._id,e)} >Delete</button>` 
                : ''}

        </div>
    </div>
</section>`;