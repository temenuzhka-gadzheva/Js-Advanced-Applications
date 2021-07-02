function focused() {
    let sectionTextEl = Array.from(document.querySelectorAll('input'));

    for (const element of sectionTextEl) {
        element.addEventListener('focus',(e) =>{
            e.target.parentNode.className = 'focused';
        });
        element.addEventListener('blur',(e) =>{
            e.target.parentNode.className = ' ';
        });
    }
}