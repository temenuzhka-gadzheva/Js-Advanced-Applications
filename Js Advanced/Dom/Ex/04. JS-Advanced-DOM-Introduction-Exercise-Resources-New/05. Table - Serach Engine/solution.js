function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll('tbody tr');
   function onClick() {
      let search = document.querySelector('#searchField')
         .value.toLowerCase();

      for (const row of rows) {

         if (row.textContent.toLowerCase().includes(search)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }

   }
}