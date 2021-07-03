function loadRepos() {

   let buttonElement = document.querySelector('button');
   buttonElement.addEventListener('click', () => {

      let urlElement = 'https://api.github.com/users/testnakov/repos';

      const httpRequest = new XMLHttpRequest();

      httpRequest.addEventListener('readystatechange', () => {

         if (httpRequest.readyState === 4 && httpRequest.status === 200) {

            // на res елемента добавям стойността от отговора на заявката
            document.getElementById('res').textContent = httpRequest.responseText;
         }
      });

      httpRequest.open("GET", urlElement);

      httpRequest.send();
   });
}




