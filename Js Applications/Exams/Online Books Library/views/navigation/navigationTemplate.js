import { html } from "./../../node_modules/lit-html/lit-html.js";

export let navigationTemplate = (navigation) => html`
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/dashboard">Dashboard</a>
        ${ navigation.isUserLogged == true 
           ? usersNavigation(navigation)
           : guestNavigation()
         }

    </section>
</nav>`;

let usersNavigation = (navigation) => html`
<div id="user">
    <span>Welcome, ${navigation.email}</span>
    <a class="button" href="/my-books">My Books</a>
    <a class="button" href="/create">Add Book</a>
    <a class="button" href="javascript:void(0)" @click=${navigation.logoutFunc}>Logout</a>
</div>`;


let guestNavigation = () => html`
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>`;