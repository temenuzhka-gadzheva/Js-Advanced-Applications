function solve() {
    let addButtonElement = document.querySelector('.action form .form-control button');


    let lectureNameElement = document.querySelector('input[name="lecture-name"]');
    let dateElement = document.querySelector('input[name="lecture-date"]');
    let moduleElement = document.querySelector('select[name="lecture-module"]');

    console.log(lectureNameElement);
    console.log(dateElement);
    console.log(moduleElement);

    addButtonElement.addEventListener('click', whenAddButtonIsClicked);


    function whenAddButtonIsClicked(e) {
        e.preventDefault();


    }
};