import { html } from './../../node_modules/lit-html/lit-html.js';
import { furnitureTemplate } from './furnitureTemplate/furnitureTemplate.js';

export let myFurnitureTemplate = (furnitures) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${furnitures.map(x => furnitureTemplate(x))}
</div>
`;