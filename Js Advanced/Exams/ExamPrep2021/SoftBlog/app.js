function solve() {
   let createButtonElement = document.querySelector('.create');

   let authorNameElement = document.querySelector('#creator');
   let titleNameElement = document.querySelector('#title');
   let categoryNameElement = document.querySelector('#category');
   let contentNameElement = document.querySelector('#content');


   createButtonElement.addEventListener('click', whenCreateButtonIsClicked);

   function whenCreateButtonIsClicked(e) {

      e.preventDefault();

      let createArticleElement = document.createElement('article');
      // first child
      let createH1Element = document.createElement('h1');
      createH1Element.textContent = titleNameElement.value;

      let categoryStrongElement = document.createElement('strong');
      categoryStrongElement.textContent = categoryNameElement.value;
      // second child
      let parCategoryElement = document.createElement('p');
      parCategoryElement.textContent = 'Category:';
      parCategoryElement.appendChild(categoryStrongElement);

      let creatorStrongElement = document.createElement('strong');
      creatorStrongElement.textContent = authorNameElement.value;
      // thrird child
      let parCreatorElement = document.createElement('p');
      parCreatorElement.textContent = 'Creator:';
      parCreatorElement.appendChild(creatorStrongElement);

      //fourth child
      let descriptionElement = document.createElement('p');
      descriptionElement.textContent = contentNameElement.value;


      let deleteButtonElement = document.createElement('button');
      deleteButtonElement.setAttribute('class', 'btn delete')
      deleteButtonElement.textContent = 'Delete';


      let archiveButtonElement = document.createElement('button');
      archiveButtonElement.setAttribute('class', 'btn archive')
      archiveButtonElement.textContent = 'Archive';


      // five child
      let divButtonsElement = document.createElement('div');
      //  divButtonsElement.classList.add('buttons');
      divButtonsElement.setAttribute('class', 'buttons');

      divButtonsElement.appendChild(deleteButtonElement);
      divButtonsElement.appendChild(archiveButtonElement);


      createArticleElement.appendChild(createH1Element);
      createArticleElement.appendChild(parCategoryElement);
      createArticleElement.appendChild(parCreatorElement);
      createArticleElement.appendChild(descriptionElement);
      createArticleElement.appendChild(divButtonsElement);

      // createartivcle element

      authorNameElement.value = '';
      titleNameElement.value = '';
      categoryNameElement.value = '';
      contentNameElement.value = '';

      // za da se zakachi za dom
      let sectionInfo = document.querySelector('main section');
      sectionInfo.appendChild(createArticleElement);

      archiveButtonElement.addEventListener('click', (e) => {
         e.preventDefault();

         let archiveSection = document.querySelector('.archive-section');
         let archiveOlElement = document.querySelector('.archive-section ol');

         deleteButtonElement.remove();
         archiveButtonElement.remove();
         divButtonsElement.remove();
         descriptionElement.remove();
         creatorStrongElement.remove();
         parCreatorElement.remove();
         categoryStrongElement.remove();
         parCategoryElement.remove();
         createArticleElement.remove();


         let liElement = document.createElement('li');
         liElement.textContent = createH1Element.textContent;

        
         createH1Element.remove();

         archiveOlElement.appendChild(liElement);

         // sorting 

         Array.from(archiveOlElement.getElementsByTagName('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(liEl => archiveOlElement.appendChild(liEl));
            archiveSection.appendChild(archiveOlElement)

      });

      deleteButtonElement.addEventListener('click', (e) => {
         e.preventDefault();
     

         deleteButtonElement.remove();
         archiveButtonElement.remove();
         divButtonsElement.remove();
         descriptionElement.remove();
         creatorStrongElement.remove();
         parCreatorElement.remove();
         categoryStrongElement.remove();
         parCategoryElement.remove();

         createArticleElement.remove();
      });
   }
}
