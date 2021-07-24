import { html } from "../../node_modules/lit-html/lit-html.js";



export let catTemplate = (cat, statusCodeToggle) => html `
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${statusCodeToggle}>Show status code</button>
        <div class="status hidden" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`




export let allCatsTemplate = (cats, statusCodeToggle) => html`
<ul>
    ${cats.map(x => catTemplate(x, statusCodeToggle))}
</ul>
`