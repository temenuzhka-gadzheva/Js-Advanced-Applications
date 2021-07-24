import { render } from './../node_modules/lit-html/lit-html.js';
import { allStudentsTemplate } from './templates/studentsTemplate.js';

let tbody = document.getElementById('tbody');
document.querySelector('#searchBtn').addEventListener('click', onClick);

let students = [];
loadStudents();


function onClick() {
   let searchInput = document.getElementById('searchField');

   let searchText = searchInput.value.toUpperCase();
   // копие от обектите
   let allStudents = students.map(x => Object.assign({}, x));
   // Ако някоя от стойностите от properties на студента съвпада с търсения текст
   let matchedStudent = allStudents
      .filter(x => Object.values(x)
         .some(v => v.toUpperCase()
            .includes(searchText)));
   matchedStudent.forEach(x => x.class = 'active');
   searchInput.value = '';
   render(allStudentsTemplate(allStudents), tbody);
}



async function loadStudents() {

   let url = ` http://localhost:3030/jsonstore/advanced/table`;
   let studentsResponse = await fetch(url);
   let studentsObj = await studentsResponse.json();

   // правя нови обекти, съдържащи цялото име
   students = Object.values(studentsObj).map(x => ({
      name: `${x.firstName} ${x.lastName}`,
      course: x.course,
      email: x.email
   }));

   render(allStudentsTemplate(students), tbody);
}



