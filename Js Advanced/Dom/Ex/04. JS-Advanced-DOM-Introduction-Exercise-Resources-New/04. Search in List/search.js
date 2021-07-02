function search() {

   let getAllTowns = document.querySelectorAll('#towns>li');
   let searchTown = document.querySelector('input').value;
   let getResult = document.getElementById('result');
   let counterByMatches = 0;

   for (const town of getAllTowns) {
     
      if (town.textContent.toLowerCase()
      .includes(searchTown.toLowerCase())) {
         
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counterByMatches++;
      } else{
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }
   getResult.textContent = `${counterByMatches} matches found`;
 }
