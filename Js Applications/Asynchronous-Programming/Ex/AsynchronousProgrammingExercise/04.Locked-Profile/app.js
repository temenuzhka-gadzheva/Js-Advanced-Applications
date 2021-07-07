function lockedProfile() {

    let urlElement = `http://localhost:3030/jsonstore/advanced/articles/list`;

    fetch(urlElement)
        .then(response => response.json())
        .then(data => {
            let mainElement = document.querySelector('#main');
            let templateProfile = document.querySelector('.profile');
            templateProfile.remove();
            Object.keys(data).forEach((key, i) => {
                let profile = data[key];
                let newProfile = createProfile(i + 1, profile.username, profile.email, profile.age);
                mainElement.appendChild(newProfile);
                console.log(mainElement);
            });
        })

    function createProfile(userIndex, username, email, age) {
        // base div
        let profileDivElement = document.createElement('div');
        profileDivElement.setAttribute('class', 'profile');

        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', './iconProfile2.png');
        imgElement.setAttribute('class', 'userIcon');

        let lockLabelElement = document.createElement('label');
        lockLabelElement.textContent = 'Lock';

        let lockInputElement = document.createElement('input');
        lockInputElement.setAttribute('type', 'radio');
        lockInputElement.setAttribute('name', `user${userIndex}Locked`,);
        lockInputElement.setAttribute('value', 'lock');
        lockInputElement.checked = true;


        let unlockLabelElement = document.createElement('label');
        unlockLabelElement.textContent = 'Unlock';

        let unlockInputElement = document.createElement('input');
        unlockInputElement.setAttribute('type', 'radio');
        unlockInputElement.setAttribute('name', `user${userIndex}Locked`);
        unlockInputElement.setAttribute('value', 'unlock');


        let firstbrElement = document.createElement('br');
        let firsthrElement = document.createElement('hr');

        let usernameLabelElement = document.createElement('label');
        usernameLabelElement.textContent = 'Username';

        let usernameInputElement = document.createElement('input');
        usernameInputElement.setAttribute('type', 'text');
        usernameInputElement.setAttribute('name', `user${userIndex}Username`);
        usernameInputElement.setAttribute('value', `${username}`);
        usernameInputElement.disabled = true;
        usernameInputElement.readOnly = true;


        // base child of basic div
        let userHiddenFieldsDivElement = document.createElement('div');
        userHiddenFieldsDivElement.setAttribute('id', `user${userIndex}HiddenFields`);


        let secondhrElement = document.createElement('hr');

        let emailLabelElement = document.createElement('label');
        emailLabelElement.textContent = 'Email:';

        let emailInputElement = document.createElement('input');
        emailInputElement.setAttribute('type', 'email');
        emailInputElement.setAttribute('name', `user${userIndex}Email`);
        emailInputElement.setAttribute('value', `${email}`);
        emailInputElement.disabled = true;
        emailInputElement.readonly = true;

        let ageLabelElement = document.createElement('label');
        ageLabelElement.textContent = 'Age:';

        let ageInputElement = document.createElement('input');
        ageInputElement.setAttribute('type', 'email');
        ageInputElement.setAttribute('name', `user${userIndex}Age`);
        ageInputElement.setAttribute('value', `${age}`);
        ageInputElement.disabled = true;
        ageInputElement.readonly = true;


        userHiddenFieldsDivElement.appendChild(secondhrElement);
        userHiddenFieldsDivElement.appendChild(emailLabelElement);
        userHiddenFieldsDivElement.appendChild(emailInputElement);
        userHiddenFieldsDivElement.appendChild(ageLabelElement);
        userHiddenFieldsDivElement.appendChild(ageInputElement);

        let showMoreButtonElement = document.createElement('button');
        showMoreButtonElement.textContent = 'Show more';
        showMoreButtonElement.addEventListener('click', showMoreHiddenInformation)


        profileDivElement.appendChild(imgElement);
        profileDivElement.appendChild(lockLabelElement);
        profileDivElement.appendChild(lockInputElement);
        profileDivElement.appendChild(unlockLabelElement);
        profileDivElement.appendChild(unlockInputElement);
        profileDivElement.appendChild(firstbrElement);
        profileDivElement.appendChild(firsthrElement);
        profileDivElement.appendChild(usernameLabelElement);
        profileDivElement.appendChild(usernameInputElement);
        profileDivElement.appendChild(userHiddenFieldsDivElement);
        profileDivElement.appendChild(showMoreButtonElement);

        return profileDivElement;
    }

    function showMoreHiddenInformation(e) {
        let profile = e.target.parentElement;
        let showMoreButtonElement = e.target;
        let hiddenFileDivElement = e.target.previousElementSibling;
        let buttonElement = profile.querySelector('input[type = "radio"]:checked');
       
        if (buttonElement.value !== 'unlock') {
            return;
        }
        
        showMoreButtonElement.textContent = showMoreButtonElement.textContent === 'Show More'
        ? 'Hide it'
        : 'Show More';

        hiddenFileDivElement.style.display = hiddenFileDivElement.style.display === 'block'
        ? 'none'
        : 'block';


    }
}