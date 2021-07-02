window.addEventListener('load', solution);

function solution() {


  let submitButtonElement = document.querySelector('#submitBTN');

  submitButtonElement.addEventListener('click', whenSubmitButtonIsClicked);


  function whenSubmitButtonIsClicked() {


    let fullNameElement = document.querySelector('input[id="fname"]');
    let emailElement = document.querySelector('input[id="email"]');
    let phoneNumberElement = document.querySelector('input[id="phone"]');
    let addressElement = document.querySelector('input[id="address"]');
    let postalCodeElement = document.querySelector('input[id="code"]');


    if (fullNameElement.value != '' && emailElement != '') {

      let ulInfoElement = document.querySelector('#infoPreview');

      // first
      let liFullNameElement = document.createElement('li');
      liFullNameElement.textContent = 'Full Name: ';
      liFullNameElement.textContent += fullNameElement.value;


      // second
      let liEmailElement = document.createElement('li');
      liEmailElement.textContent = 'Email: ';
      liEmailElement.textContent += emailElement.value;

      // third
      let liPhoneNumberElement = document.createElement('li');
      liPhoneNumberElement.textContent = 'Phone number: ';
      liPhoneNumberElement.textContent += phoneNumberElement.value;


      // fourth
      let liAddressElement = document.createElement('li');
      liAddressElement.textContent = 'Address: ';
      liAddressElement.textContent += addressElement.value;

      // five
      let liPostalCodeElement = document.createElement('li');
      liPostalCodeElement.textContent = 'Postal Code: ';
      liPostalCodeElement.textContent += postalCodeElement.value;




      ulInfoElement.appendChild(liFullNameElement);
      ulInfoElement.appendChild(liEmailElement);
      ulInfoElement.appendChild(liPhoneNumberElement);
      ulInfoElement.appendChild(liAddressElement);
      ulInfoElement.appendChild(liPostalCodeElement);




      let editButtonElement = document.querySelector('#editBTN');
      let continueButtonElement = document.querySelector('#continueBTN');

      editButtonElement.removeAttribute("disabled");
      continueButtonElement.removeAttribute("disabled");

      submitButtonElement.setAttribute('disabled', 'disabled');
      editButtonElement.addEventListener('click', whenEditIsClicked);


      fullNameElement.value = '';
      emailElement.value = '';
      phoneNumberElement.value = '';
      addressElement.value = '';
      postalCodeElement.value = '';



      continueButtonElement.addEventListener('click', () => {
        let blockDivElement = document.querySelector('#block');
        blockDivElement.remove();
        let newDivElement = document.createElement('div');
        newDivElement.setAttribute('id', 'block');

        let h3Element = document.createElement('h3');

        h3Element.textContent = 'Thank you for your reservation!';
        let bodyElement = document.querySelector('body');
        newDivElement.appendChild(h3Element);

        bodyElement.appendChild(newDivElement);
      })

      function whenEditIsClicked() {

        submitButtonElement.removeAttribute("disabled");

        editButtonElement.setAttribute('disabled', 'disabled');
        continueButtonElement.setAttribute('disabled', 'disabled');




        fullNameElement.value = liFullNameElement.textContent;
        emailElement.value = liEmailElement.textContent;
        phoneNumberElement.value = liPhoneNumberElement.textContent;
        addressElement.value = liAddressElement.textContent;
        postalCodeElement.value = liPostalCodeElement.textContent;

        liFullNameElement.remove();
        liEmailElement.remove();
        liPhoneNumberElement.remove();
        liAddressElement.remove();
        liPostalCodeElement.remove();

      }






    }
  }
}
