import page from "./node_modules/page/page.mjs";
import { RenderWithLit } from "./rendering/renderWithLit.js";
import authentication from "./services/authentication.js";
import crud from "./services/crud.js";
import create from "./views/create/create.js";
import dashboard from "./views/dashboard/dashboard.js";
import details from "./views/details/details.js";
import edit from "./views/edit/edit.js";
import login from "./views/login/login.js";
import myBooks from "./views/myBooks/myBooks.js";
import navigation from "./views/navigation/navigation.js";
import register from "./views/register/register.js";


let navigationApp = document.querySelector('#site-header');
let mainView = document.querySelector('#site-content');

let renderingLibrary = new RenderWithLit();

let navigationRendering = renderingLibrary.renderCreate(navigationApp);
let mainRendering = renderingLibrary.renderCreate(mainView);


navigation.toInitialization(page, navigationRendering, authentication);
login.toInitialization(page, mainRendering, authentication);
register.toInitialization(page, mainRendering, authentication);
dashboard.toInitialization(page, mainRendering, crud);
details.toInitialization(page, mainRendering, crud);
create.toInitialization(page, mainRendering, crud);
edit.toInitialization(page, mainRendering, crud);
myBooks.toInitialization(page, mainRendering, crud);

page('/index.html', '/dashboard');
page('/', '/dashboard');

page('*', chainingContextWithUser);
page('*', navigation.getView);

page('/login', login.getView);
page('/register', register.getView);
page('/dashboard', dashboard.getView);
page('/create', create.getView);
page('/details/:id', details.getView);
page('/edit/:id', edit.getView);
page('/my-books', myBooks.getView);



page.start();



function chainingContextWithUser(context, next) {
    let user = authentication.getUser();
    context.user = user;
    next();
}