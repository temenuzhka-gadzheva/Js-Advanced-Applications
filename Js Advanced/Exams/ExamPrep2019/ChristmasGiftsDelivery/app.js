function solution() {
    let buttonElement = document.querySelector('.container .card  button');
    let giftListElement = document.querySelector('section:nth-child(2) >ul');
    let sendGiftsElement = document.querySelector('section:nth-child(3) >ul');
    let discardedGiftsElement = document.querySelector('section:nth-child(4)> ul');
    let giftNameElement = document.querySelector('.container .card   input[placeholder="Gift name"]');
   
    buttonElement.addEventListener('click', () => {

        let liElement = document.createElement('li');
        liElement.classList.add('gift');
        liElement.textContent = giftNameElement.value;

        let sendButtonElement = document.createElement('button');
        sendButtonElement.setAttribute('id','sendButton');
        sendButtonElement.textContent = 'Send';

        let discardButtonElement = document.createElement('button');
        discardButtonElement.setAttribute('id','discardButton');
        discardButtonElement.textContent = 'Discard';


        sendButtonElement.addEventListener('click',()=>{
         let newLiElement = document.createElement('li');
         newLiElement.classList.add('gift');
         newLiElement.textContent = (liElement.textContent).replace('SendDiscard', '');

         sendGiftsElement.appendChild(newLiElement);

         liElement.remove();

        });

        discardButtonElement.addEventListener('click',()=>{
         let newDiscardElement = document.createElement('li');
         newDiscardElement.classList.add('gift');
         newDiscardElement.textContent = (liElement.textContent).replace('SendDiscard', '');

         discardedGiftsElement.appendChild(newDiscardElement);
         console.log(discardedGiftsElement);

         liElement.remove();
        });
liElement.appendChild(sendButtonElement);
liElement.appendChild(discardButtonElement);

giftListElement.appendChild(liElement);

Array.from(giftListElement.getElementsByTagName('li'))
.sort((a,b) => a.textContent.localeCompare(b.textContent))
.forEach(liEl =>giftListElement.appendChild(liEl));

giftNameElement.value = '';
    });
}