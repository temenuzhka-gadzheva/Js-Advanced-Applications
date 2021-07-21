let mainSection = undefined;
let viewSelectorSection = undefined;

function initialize(mainDomElement, viewSelector) {
    mainSection = mainDomElement;
    viewSelectorSection = viewSelector;
}

async function viewChange(viewPromise) {
    let view = await viewPromise;

    if (view !== undefined) {

        mainSection.querySelectorAll(viewSelectorSection)
            .forEach(x => x.remove());

        mainSection.appendChild(view);
    }
}

let viewChanger ={
    initialize,
    viewChange
};

export default viewChanger;