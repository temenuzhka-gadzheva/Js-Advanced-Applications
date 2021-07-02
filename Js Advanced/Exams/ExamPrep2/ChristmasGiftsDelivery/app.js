function solution() {
    //взимаме всички секции
    let addButtonElement = document.querySelector('.container .card div button');
    let listGiftsUlElement = document.querySelector('section:nth-child(2) ul');
    let sentGiftsUlElement = document.querySelector('section:nth-child(3) ul');
    let discardedGiftsUlElement = document.querySelector('section:nth-child(4) ul');

    // взимаме такста
    let inputElement = document.querySelector('input[placeholder="Gift name"]');
    
    addButtonElement.addEventListener('click', whenButtonIsClicked);


    function whenButtonIsClicked(e) {
        e.preventDefault();
        // създаваме ли и 2 бутана
        let liElement = document.createElement('li');
        liElement.classList.add('gift');
        liElement.textContent = inputElement.value;
       
        let sendButtonElement = document.createElement('button');
        sendButtonElement.setAttribute('id','sendButton');
        sendButtonElement.textContent = 'Send';



        let discardButtonElement = document.createElement('button');
        discardButtonElement.setAttribute('id','discardButton');
        discardButtonElement.textContent = 'Discard';

        liElement.appendChild(sendButtonElement);
        liElement.appendChild(discardButtonElement);

        listGiftsUlElement.appendChild(liElement);
       

        // сортираме по азбучен ред
        Array.from(listGiftsUlElement.getElementsByTagName('li'))
        .sort((a,b) => a.textContent.localeCompare(b.textContent))
        .forEach(e => listGiftsUlElement.appendChild(e));

        // прехвърляме от 2 към 3 секция
        sendButtonElement.addEventListener('click',()=>{
         sendButtonElement.remove();
         discardButtonElement.remove();
         sentGiftsUlElement.appendChild(liElement);
        });

         // прехвърляме от 2 към 4 секция
        discardButtonElement.addEventListener('click',()=>{
          sendButtonElement.remove();
          discardButtonElement.remove();
          discardedGiftsUlElement.appendChild(liElement);
          discardedGiftsUlElement.appendChild(liElement);
        });
      
        // зануляваме текст полето
        inputElement.value = '';
    }
}

