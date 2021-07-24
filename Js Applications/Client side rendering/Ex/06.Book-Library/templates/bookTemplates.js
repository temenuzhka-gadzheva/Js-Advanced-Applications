import { html } from "./../../node_modules/lit-html/lit-html.js";

export let addFormTemplate = () => html`
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
`;

export let editFormTemplate = (book) => html`
<form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" .value=${book.author}>
    <input type="submit" value="Save">
</form>
`;


