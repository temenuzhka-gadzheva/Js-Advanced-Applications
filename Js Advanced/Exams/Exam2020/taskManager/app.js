function solve() {
    // взимаме бутона
    let buttonAddElement = document.querySelector('#add');


    buttonAddElement.addEventListener('click', whenClicked);

    let divByArticleElementOpen = document.querySelector('.orange').parentNode.parentNode.children[1];
    let divByArticleElementInProgress = document.querySelector('#in-progress');
    let divByArticleElementGreen = document.querySelector('.green').parentNode.parentNode.children[1];

   // let divByArticleElementOpen = document.querySelector('section:nth-child(2)> div');
  //  let divByArticleElementInProgress = document.querySelector('section:nth-child(3)> div');
  //  let divByArticleElementGreen = document.querySelector('section:nth-child(4)> div');


    function whenClicked(e) {
        //za da ne se refresh
        e.preventDefault();


        let taskNameElement = document.querySelector('input[name="task"]');
        let descriptionElement = document.querySelector('#description');
        let dateElement = document.querySelector('input[name="date"]');

       
        if (taskNameElement.value != '' && descriptionElement != '' && dateElement != '') {
            let articleElement = document.createElement('article');

            let h3Element = document.createElement('h3');
            h3Element.textContent = taskNameElement.value;

            articleElement.appendChild(h3Element);

            let descriptionPElement = document.createElement('p');
            descriptionPElement.textContent = "Description: " + descriptionElement.value;

            articleElement.appendChild(descriptionPElement);

            let datePElement = document.createElement('p');
            datePElement.textContent = "Due Date: " + dateElement.value;

            articleElement.appendChild(datePElement);

            taskNameElement.value = '';
            descriptionElement.value = '';
            dateElement.value = '';
            let divElement = document.createElement('div');
            divElement.classList.add('flex');

            articleElement.appendChild(divElement);

            divByArticleElementOpen.appendChild(articleElement);

            let startButtonElement = document.createElement('button');
            startButtonElement.classList.add('green');
            startButtonElement.textContent = 'Start';
            divElement.appendChild(startButtonElement);

            let deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('red');
            deleteButtonElement.textContent = 'Delete';
            divElement.appendChild(deleteButtonElement);


            let finishButtonElement = document.createElement('button');
            finishButtonElement.classList.add('orange');
            finishButtonElement.textContent = 'Finish';


            startButtonElement.addEventListener('click', () => {
                startButtonElement.remove();
                divElement.appendChild(finishButtonElement);
                divByArticleElementInProgress.appendChild(articleElement);
            });

            deleteButtonElement.addEventListener('click', () => {
                articleElement.remove();
            });

            finishButtonElement.addEventListener('click', () => {
                divElement.remove();
                divByArticleElementGreen.appendChild(articleElement);
            });
        } else { return; }
    }

}





