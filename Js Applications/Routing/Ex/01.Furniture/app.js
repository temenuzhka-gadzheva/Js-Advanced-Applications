
import navigation from "./navigation/navigation.js";
import page from "./node_modules/page/page.mjs";
import rendering from "./render/rendering.js";
import create from "./views/create/create.js";
import dashboard from "./views/dashboard/dashboard.js";
import login from "./views/login/login.js";
import register from "./views/register/register.js";
import logout from "./logout/logout.js";
import details from "./views/details/details.js";
import edit from "./views/edit/edit.js";
import myFurniture from "./views/myFurniture/myFurniture.js";

let navigationApp = document.getElementById('navigation');
let dashboardContainer = document.getElementById('dashboard-container');


rendering.toInitialization(dashboardContainer, navigationApp);
page('index.html', '/dashboard');
page('/', '/dashboard');

page('/dashboard', rendering.decorateContext, navigation.getView, dashboard.getView);
page('/login', rendering.decorateContext, navigation.getView, login.getView);
page('/register', rendering.decorateContext, navigation.getView, register.getView);
page('/logout',  logout.logoutFunc);
page('/details/:id',rendering.decorateContext, navigation.getView, details.getView);
page('/create', rendering.decorateContext, navigation.getView, create.getView);
page('/edit/:id',rendering.decorateContext, navigation.getView, edit.getView);
page('/myFurniture',rendering.decorateContext, navigation.getView, myFurniture.getView);


page.start();