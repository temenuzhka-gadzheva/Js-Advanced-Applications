
let views = {
'home' : async ()=> await homePage.getView(),
'login' : async ()=> await loginPage.getView(),
'register' : async ()=> await registerPage.getView(),
'logout' : async ()=> await logoutPage.getView(),
'details' : async ()=> await detailsPage.getView(),
'create' : async ()=> await createPage.getView(),
'dashboard' : async ()=> await dashboard.getView(),

}
let navItemSelector = undefined;
let navigationCallback = undefined;

function initialize(allItemElements, itemSelector, callback){

    allItemElements.forEach(x => x.addEventListener('click', changeViewHandler));

    navItemSelector = itemSelector;
    navigationCallback = callback;
}

export async  function changeViewHandler(e){

    let element = e.target.matches(navItemSelector)
    ? e.target  : e.target.closest(navItemSelector);

    let nav = element.dataset.nav;
    let id = element.dataset.id;
    navigateTo(nav,id);
}

export async function navigateTo(nav,id){

    if (views.hasOwnProperty(nav)) {
        let viewPromise = views[nav](id);
        navigationCallback(viewPromise);
    }
}

let viewFinder = {
    initialize,
    navigateTo,
    changeViewHandler
};

export default viewFinder;