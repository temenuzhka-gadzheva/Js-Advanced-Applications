function deleteByEmail() {
    let itemTextEl = document.querySelector('input[name="email"]').value;

    let table = [...document.querySelectorAll('tbody tr')];
    let searchingEl = document.getElementById('result');

    let isDeleted = false;

    table.forEach(row =>{
        if (row.children[1].textContent === itemTextEl) {
            row.parentNode.removeChild(row);
            searchingEl.textContent = 'Deleted.'; 
            isDeleted = true;
         
        }
    });
    if (!isDeleted) {
        searchingEl.textContent = 'Not found.';
    }
}