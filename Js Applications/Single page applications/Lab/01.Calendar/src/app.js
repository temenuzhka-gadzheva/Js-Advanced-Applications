let mounthNamesElement = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12,

};

// взимаме секцията с id години
let yearSectionElement = document.querySelector('#years');

//взимаме годините и след това пазим в речник годината за ключ и месеца
let listOfYearsElement = [...document.querySelectorAll('.monthCalendar')]
    .reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
    }, {});

//взимаме месеците и след това пазим в речник месеца за ключ и деня
let listOfMounthElement = [...document.querySelectorAll('.daysCalendar')]
    .reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
    }, {});


function displaySection(section) {

    // скриваме всички секции
    document.body.textContent = '';
    // добавяме само първата секция
    document.body.appendChild(section);
}


displaySection(yearSectionElement);


yearSectionElement.addEventListener('click', (e) => {

    if (e.target.classList.contains('date')
        || e.target.classList.contains('day')) {

        // ако се обработи другите ивенти не се изпълняват
        e.stopImmediatePropagation();
        let yearIdElement = `year-${e.target.textContent.trim()}`;
        displaySection(listOfYearsElement[yearIdElement]);
    }

})

document.body.addEventListener('click', (e) => {

    if (e.target.tagName === 'CAPTION') {

        let sectionIdElement = e.target.parentNode.parentNode.id;

        if (sectionIdElement.includes('year-')) {
            displaySection(yearSectionElement);
        }else if (sectionIdElement.includes('month-')) {
            let yearIdElement = sectionIdElement.split('-')[1];
            displaySection(listOfYearsElement[`year-${yearIdElement}`]);
        }
    } else if (e.target.tagName === 'TD' || e.target.tagName === 'DIV') {
        let mounthNameElement = e.target.textContent.trim();

        if (mounthNamesElement.hasOwnProperty(mounthNameElement)) {
            let parentElement = e.target.parentNode;
            while (parentElement.tagName !== 'TABLE') {

                parentElement = parentElement.parentNode;
            }
            let yearElement = parentElement.querySelector('caption').textContent.trim();

            let mounthIdElement = `month-${yearElement}-${mounthNamesElement[mounthNameElement]}`;

            displaySection(listOfMounthElement[mounthIdElement]);
        }
    }
})
