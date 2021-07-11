let url = `http://localhost:3030/jsonstore/collections/students`;


fetch(url)
    .then(response => response.json())
    .then(data => {
        // взимаме всички данни от сървара
        Object.values(data).forEach(el => {

            let tBodyElement = document.querySelector('tbody');

            let trElement = document.createElement('tr');

            let thFirstNameElement = document.createElement('th');
            thFirstNameElement.textContent = el.firstName;

            let thLastNameElement = document.createElement('th');
            thLastNameElement.textContent = el.lastName;


            let thFacultyNumberElement = document.createElement('th');
            thFacultyNumberElement.textContent = el.facultyNumber;


            let thGradeElement = document.createElement('th');
            thGradeElement.textContent = el.grade;


            trElement.appendChild(thFirstNameElement);
            trElement.appendChild(thLastNameElement);
            trElement.appendChild(thFacultyNumberElement);
            trElement.appendChild(thGradeElement);

            tBodyElement.appendChild(trElement);

          //  console.log(tBodyElement);

        })
    })


let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', (e) => {

    e.preventDefault();
    // взимаме всички  input полета 
    let formElement = Array.from(document.querySelectorAll('input'));
    // взимаме всички  стойности на  input полетата 
    let infoAboutStudent = formElement.map(el => el.value);
    // деконстуираме данните
    let [firstName, lastName, facultyNumber, grade] = infoAboutStudent;

    if (isNaN(facultyNumber) || isNaN(grade)) {
        throw new Error(`${facultyNumber} and ${grade} must be numbers!`);
    } else if (firstName === "" || lastName === "" ||
        facultyNumber === '' || grade === '') {
        throw new Error(`All fields must be successfully completed!`);
    } else {

        let student = {
            firstName,
            lastName,
            facultyNumber,
            grade
        };

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(response => response.json())
            .then(data => {
                let tBodyElement = document.querySelector('tbody');

                let trElement = document.createElement('tr');

                let thFirstNameELement = document.createElement('th');
                thFirstNameELement.textContent = data.firstName;

                let thLastNameELement = document.createElement('th');
                thLastNameELement.textContent = data.lastName;

                let thFacultyNumberELement = document.createElement('th');
                thFacultyNumberELement.textContent = data.facultyNumber;

                let thGradeELement = document.createElement('th');
                thGradeELement.textContent = data.grade;

                trElement.appendChild(thFirstNameELement);
                trElement.appendChild(thLastNameELement);
                trElement.appendChild(thFacultyNumberELement);
                trElement.appendChild(thGradeELement);

                tBodyElement.appendChild(trElement);

            })
    }

















})




