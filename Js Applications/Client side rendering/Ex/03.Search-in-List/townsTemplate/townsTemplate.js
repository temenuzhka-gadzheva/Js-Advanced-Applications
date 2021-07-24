import { html } from "./../../node_modules/lit-html/lit-html.js";
//чрез тази библиотека се показват класовете само там, където ми трябват и не се добавя излишния undefined клас
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js";


export  let townTemplate = (town) => html`<li class =${ifDefined(town.class)}>${town.name}</li> `


export let townsTemplate = (towns) =>html `
<ul>
${towns.map(x => townTemplate(x))}
</ul>
`;
export let matchesTownsTemplate = (matches) => html`
<span>${matches} matches was found !</span>
`
export let matchTownTemplate = (matches) => html`
<span>${matches} match was found !</span>
`

export let notMatchFound = (matches) => html`
<span> Match was not found !</span>
`