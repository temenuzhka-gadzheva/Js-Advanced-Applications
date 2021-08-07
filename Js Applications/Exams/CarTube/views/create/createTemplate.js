import {html} from "./../../node_modules/lit-html/lit-html.js";

export let createaTemplate = (form) => html`
    <section id="create-listing">
        <div class="container">
            <form @submit=${form.whenFormSubmitted} id="create-form">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" .value="">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" .value="">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" .value="">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" .value=''>
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" .value="">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" .value=''>
    
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>`;