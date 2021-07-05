function loadCommits() {

    let usernameElement = document.querySelector('#username').value;
    let repoElement = document.querySelector('#repo').value;

    let ulCommitsElement = document.querySelector('#commits');

    const baseUrlElement = `https://api.github.com/repos/${usernameElement}/${repoElement}`;
    
    ulCommitsElement.textContent = '';

    let buttonElement = document.querySelector('button');

    buttonElement.addEventListener('click', () => {

        fetch(`${baseUrlElement}/commits`)
            .then(res => {
                if (res.status === 404) {
                    throw new Error(`<li>${res.status} (${res.statusText})</li>`);
                }
                return res.json();
            })
            .then(repos => {

                repos.forEach(c => {

                    let liElement = document.createElement('li');

                    liElement.textContent = `${c.commit.author.name} : ${c.commit.message}`;
                 
                    ulCommitsElement.appendChild(liElement);
                });
            })
            .catch(error=>{
                ulCommitsElement.textContent = error.message;
            })
    });
}