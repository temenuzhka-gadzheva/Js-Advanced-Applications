import addMoviePage from "./sections/addMovie.js";
import editMoviePage from "./sections/editMovie.js";
import homePage from "./sections/home.js";
import loginPage from "./sections/login.js";
import movieDetailsPage from "./sections/movieDetails.js";
import registerPage from "./sections/register.js";
import auth from "./authentication/auth.js";

let sections = {
    //each of these functions will produce a view
    'home': async () => await homePage.getView(),
    'register': async () => await registerPage.getView(),
    'login': async () => await loginPage.getView(),
    'add-movie': async () => await addMoviePage.getView(),
    'edit': async (id) => await editMoviePage.getView(id),
    'details': async (id) => await movieDetailsPage.getView(id),
    'logout': async () => await auth.logout(),
    'delete': async (id) => await movieDetailsPage.deleteMovie(id),
    'like': async (id) => await movieDetailsPage.likeMovie(id)
};

let getViewCallback = undefined;
let dataRoute = undefined;

export function initialization(linkElements, linkSelector, callback) {
    dataRoute = linkSelector;

    linkElements.forEach(x => x.addEventListener('click', navigationHandler));
    getViewCallback = callback;
}

export function navigationHandler(e) {
  
    let element = e.target.matches(dataRoute) ? e.target : e.currentTarget.closest(dataRoute);
   
    if (element.dataset.route !== undefined) {
        let [route, id] = element.dataset.route.split('/');
        
        navigateTo(route, id);
    }
}

export function navigateTo(route, id) {
    if (sections[route] !== undefined) {
        let viewPromise = sections[route](id);
        getViewCallback(viewPromise);
    }
}

export function redirectTo(route, id) {
    if (sections[route] !== undefined) {
        let viewPromise = sections[route](id);


        location.hash = `/${route}${id !== undefined ? `/${id}` : ''}`;
        return viewPromise;
    }
}

let viewSections = {
    navigateTo,
    redirectTo,
    navigationHandler,
    initialize: initialization
}

export default viewSections;

