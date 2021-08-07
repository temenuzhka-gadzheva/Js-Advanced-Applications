import { html } from "./../../node_modules/lit-html/lit-html.js";

export let navigationTemplate = (navigation) => html`

<nav>
    <a class="active" href="/home">Home</a>
    <a href="/listings">All Listings</a>
    <a href="/search">By Year</a>
    ${navigation.isLogged == true
        ? loggedNavTemplate(navigation)
        : guestNavTemplate()
      }
</nav >
`;

let loggedNavTemplate = (navigation) => html`
<div id="profile">
    <a>Welcome ${navigation.username}</a>
    <a href="/myListings">My Listings</a>
    <a href="/create">Create Listing</a>
    <a href="javascript:void(0)" @click=${navigation.logoutFunc}>Logout</a>
</div>`;

let guestNavTemplate = () => html`
<div id="guest">
    <a href="login">Login</a>
    <a href="register">Register</a>
</div>`;

