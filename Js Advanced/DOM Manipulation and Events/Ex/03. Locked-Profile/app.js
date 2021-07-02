function lockedProfile() {
    Array.from(document.getElementsByClassName('profile')).forEach(parent => {
        let buttonElement = parent.querySelectorAll('button')[0];
        buttonElement.addEventListener('click', () => {
            let unlockElement = parent.querySelectorAll(/*"input [value = 'unlock']"*/ 'input')[1].checked;
            let hiddenDivEl = parent.querySelectorAll('div')[0];

            if (unlockElement) {

                if (buttonElement.textContent === 'Show more') {
                    hiddenDivEl.style.display = 'block';
                    buttonElement.textContent = 'Hide it';

                } else if (buttonElement.textContent === 'Hide it') {
                    hiddenDivEl.style.display = 'none';
                    buttonElement.textContent = 'Show more';
                }
            }
        });
    })
}