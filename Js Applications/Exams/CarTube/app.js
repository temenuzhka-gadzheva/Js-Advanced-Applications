import page from "./node_modules/page/page.mjs";
import { RenderWithLit } from "./rendering/renderingWithLit.js";
import authetication from "./services/authetication.js";
import crud from "./services/crud.js";
import create from "./views/create/create.js";
import details from "./views/details/details.js";
import edit from "./views/edit/edit.js";
import home from "./views/home/home.js";
import listings from "./views/listings/listings.js";
import login from "./views/login/login.js";
import myListings from "./views/myListings/myListings.js";
import navigation from "./views/navigation/navigation.js";
import register from "./views/register/register.js";
import search from "./views/search/search.js";



let navigationApp = document.querySelector('#navigation');
let mainView = document.querySelector('#site-content');



let renderLibrary = new RenderWithLit();


let navigationRendering = renderLibrary.renderCreate(navigationApp);
let mainRendering = renderLibrary.renderCreate(mainView);


navigation.toInitialization(page, navigationRendering, authetication);
register.toInitialization(page, mainRendering, authetication);
login.toInitialization(page, mainRendering, authetication);
home.toInitialization(page, mainRendering, authetication);
listings.toInitialization(page, mainRendering, crud);
create.toInitialization(page, mainRendering, crud);
details.toInitialization(page, mainRendering, crud);
edit.toInitialization(page, mainRendering, crud);
myListings.toInitialization(page, mainRendering, crud);
search.toInitialization(page, mainRendering,crud);


page('/index.html', '/home');
page('/', '/home');

page('*', chainingContextWithUser);
page('*', navigation.getView);

page('/register', register.getView);
page('/login', login.getView);
page('/home', home.getView);
page('/listings', listings.getView);
page('/create', create.getView);
page('/details/:id', details.getView);
page('/edit/:carId', edit.getView);
page('/myListings', myListings.getView);
page('/search', search.getView);


page.start();



function chainingContextWithUser(context, next) {
    let user = authetication.getUser();
    context.user = user;
    next();
}
