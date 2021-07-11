let textAreaElement = document.querySelector('#messages');
let urlMessageInfo = `http://localhost:3030/jsonstore/messenger`;

let sendButtonElement = document.querySelector('#submit');
sendButtonElement.addEventListener('click', () => {
    let authorNameElement = document.querySelector('#author').value;
    let messageElement = document.querySelector('#content').value;

    let myMessage = {
        author: authorNameElement,
        content: messageElement
    };

    fetch(urlMessageInfo, {
        method: "POST",
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myMessage)
    }).then(response => response.json())
        .then(data => {
            console.log(data);

            textAreaElement.value = textAreaElement.value + `\n${myMessage.author}: ${myMessage.content}`;
        })
        .catch(err => console.error(err));
});


let refreshButtonElement = document.querySelector('#refresh');
refreshButtonElement.addEventListener('click', () => {

    fetch(urlMessageInfo)
        .then(response => response.json())
        .then(data => {

            Object.values(data).forEach(info => {
                textAreaElement.append(`${info.author}: ${info.content}\n`);
            });

        })
        .catch(error => console.error(error));
});

