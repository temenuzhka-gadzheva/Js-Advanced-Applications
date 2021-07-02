function addItem() {
   let newItemTextEl = document.getElementById('newItemText');
   let allItemsEl = document.getElementById('items');

   let myNewEl = document.createElement('li');
    myNewEl.textContent =  newItemTextEl.value;
    newItemTextEl.value = '';
    allItemsEl.appendChild(myNewEl);

}