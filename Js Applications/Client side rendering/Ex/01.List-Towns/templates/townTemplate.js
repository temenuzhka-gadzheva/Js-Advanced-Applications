import { html } from "../../node_modules/lit-html/lit-html.js";

export  let liElementsTeplate = (town) => html`<li>${town}</li> `


export let myTemplate = (towns) =>html `
<ul>
${towns.map(x => liElementsTeplate(x))}
</ul>
`
