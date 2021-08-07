import { html} from "./../../node_modules/lit-html/lit-html.js";

export let navigationTemplate = (navigation) => html `

${navigation.isLogged 
    ? usersNavigation(navigation)
    : guestNavigation() }
`;

let usersNavigation = (navigation) => html`
<a href="/all-memes">All Memes</a>
<div class="user">
    <a href="/create">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${navigation.email}</span>
        <a href="/profile">My Profile</a>
        <a href="javascript:void(0)" @click=${navigation.logoutFunc}>Logout</a>
    </div>
</div>`;

let guestNavigation = () => html`
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/home">Home Page</a>
    <a href="/all-memes">All Memes</a>
</div>`;