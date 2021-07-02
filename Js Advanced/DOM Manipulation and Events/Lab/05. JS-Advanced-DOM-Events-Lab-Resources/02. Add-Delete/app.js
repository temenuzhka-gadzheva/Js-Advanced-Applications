function addItem() {
    let newItemTextEl = document.getElementById('newItemText');
    let allItemsEl = document.getElementById('items');

    let myNewLiElement = document.createElement('li');
    myNewLiElement.textContent = newItemTextEl.value;


    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]';

    myNewLiElement.appendChild(deleteButton);
    allItemsEl.appendChild(myNewLiElement);

    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    });
newItemTextEl.value = '';

}