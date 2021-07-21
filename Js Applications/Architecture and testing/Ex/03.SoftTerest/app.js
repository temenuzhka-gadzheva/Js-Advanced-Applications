setup();

async function setUp(){
    let itemClass = 'item';
    let itemSelector = `.${itemClass}`;


let allItemSelectors = document.querySelectorAll(itemSelector);
let mainElement = document.querySelector('#softTerest');
    viewChanger.initialize(mainElement,'.view');
    viewFinder.initialize(allItemSelectors,itemSelector,viewChanger);

    viewFinder.navigateTo('home')
}

// not work correctlly