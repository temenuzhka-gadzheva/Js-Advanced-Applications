function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');
   
    let optionEl = document.createElement('option');

    optionEl.textContent = textElement.value;
    optionEl.value = valueElement.value;

    menuElement.appendChild(optionEl);

    textElement.value = '';
    valueElement.value = '';
}