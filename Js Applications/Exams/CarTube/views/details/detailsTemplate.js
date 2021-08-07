import {html} from "./../../node_modules/lit-html/lit-html.js";


export let detailsTemplate = (item) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${item.car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${item.car.brand}</li>
            <li><span>Model:</span>${item.car.model}</li>
            <li><span>Year:</span>${item.car.year}</li>
            <li><span>Price:</span>${item.car.price}$</li>
        </ul>

        <p class="description-para">${item.car.description}</p>

       ${item.isOwner
          ? html`
           <div class="listings-buttons">
            <a href="/edit/${item.car._id}" class="button-list">Edit</a>
            <a href="/listings" @click=${(e) => item.deleteCar(item.car._id,e)} class="button-list">Delete</a>
           </div>` 
          : '' }
    </div>
</section>`;
