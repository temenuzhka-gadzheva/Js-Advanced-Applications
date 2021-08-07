import page from "./node_modules/page/page.mjs";
import { RenderWithLit } from "./rendering/renderWithLit.js";
import authentication from "./services/authentication.js";
import crud from "./services/crud.js";
import create from "./views/create/create.js";
import details from "./views/details/details.js";
import edit from "./views/edit/edit.js";
import home from "./views/home/home.js";
import login from "./views/login/login.js";
import meme from "./views/memes/meme.js";
import navigation from "./views/navigation/navigation.js";
import notification from "./views/notification/notification.js";
import profile from "./views/profile/profile.js";
import register from "./views/register/register.js";


let navigationApp = document.getElementById('navigation');
let mainView = document.getElementById('mainView');
let noticationView = document.getElementById('notifications');
let renderLibrary = new RenderWithLit();


let navigationRendering = renderLibrary.renderCreate(navigationApp);
let mainRendering = renderLibrary.renderCreate(mainView);
let notifivationgRendering = renderLibrary.renderCreate(noticationView);
notification.toInitialization(page,notifivationgRendering);

navigation.toInitialization(page, navigationRendering, authentication);
home.toInitialization(page, mainRendering, authentication);
register.toInitialization(page, mainRendering, authentication, notification);
meme.toInitialization(page, mainRendering, crud);
login.toInitialization(page, mainRendering, authentication,notification);
create.toInitialization(page, mainRendering, crud, notification);
details.toInitialization(page, mainRendering, crud);
edit.toInitialization(page, mainRendering, crud, notification);
profile.toInitialization(page, mainRendering, crud);

page('/index.html', '/home');
page('/', '/home');

page('*', chainingContextWithUser);
page('*', navigation.getView);

page('/home', home.getView);
page('/register', register.getView);
page('/memes', meme.getView);
page('/login', login.getView);
page('/create', create.getView);
page('/all-memes', meme.getView);
page('/details/:id', details.getView);
page('/edit/:id', edit.getView);
page('/profile', profile.getView);

page.start();

function chainingContextWithUser(context, next) {
    let user = authentication.getUser();
    context.user = user;
    next();
}