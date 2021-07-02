function toggle() {
    let getTextEl = document.getElementById('extra');
    let buttonInfo = document.getElementsByClassName('button')[0];
   
    let isConceal = buttonInfo.textContent === 'More';
   
    getTextEl.style.display = isConceal ? 'block' : 'none';
    buttonInfo.textContent = isConceal ? 'Less' : 'More';
}