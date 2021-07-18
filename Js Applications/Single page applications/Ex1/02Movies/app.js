import registerPage from './src/sections/register.js';
import navigation from './src/navigation.js';
import homePage from './src/sections/home.js';
import loginPage from './src/sections/login.js';
import addMoviePage from './src/sections/addMovie.js';
import movieDetailsPage from './src/sections/movieDetails.js';
import editMoviePage from './src/sections/editMovie.js';
import viewSections from './src/viewSections.js';
import auth from './src/authentication/auth.js';

let applicationElement = undefined;
setupApplication();

function setupApplication() {
    let appSelector = '#app';

    auth.cleanStorage();

    applicationElement = document.querySelector(appSelector);

    homePage.initialization(document.querySelector('#home-page'));
    registerPage.initialization(document.querySelector('#form-sign-up'));
    loginPage.initialization(document.querySelector('#form-login'));
    addMoviePage.initialization(document.querySelector('#add-movie'));
    movieDetailsPage.initialization(document.querySelector('#movie-example'), 'link');
    editMoviePage.initialization(document.querySelector('#edit-movie'));
    navigation.initialization(document.querySelector('nav'));
    viewSections.initialization(document.querySelectorAll('.link'), '.link', changedView);

    viewSections.navigateTo('home');
}

async function changedView(viewPromise) {
    let view = await viewPromise;
    [...applicationElement.children].forEach(x => x.remove());
    applicationElement.appendChild(view);
}