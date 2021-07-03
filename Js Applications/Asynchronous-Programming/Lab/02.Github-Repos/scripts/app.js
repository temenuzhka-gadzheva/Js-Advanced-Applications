function loadRepos() {

	const usernameElement = document.querySelector('#username').value;

	const baseUrlElement = `https://api.github.com/users/${usernameElement}`;
	let buttonElement = document.querySelector('button');
	buttonElement.addEventListener('click', () => {
		fetch(`${baseUrlElement}/repos`)
			.then(res => {
				if (res.status === 404) {
					throw new Error('User was not found!!!!!!');
				}
				return res.json();
			})
			.then(repos => {
				// comming as array
				let reposElements = document.querySelector('#repos');
				reposElements.innerHTML = '';
				repos.forEach(r => {
					let aElement = document.createElement('a');
					let liElement = document.createElement('li');

					// добавяме връзка с пълното име на потребителя
					aElement.setAttribute('href', r.full_name);
					//придаваме стойност на връзката
					aElement.textContent = r.full_name;
					liElement.append(aElement);
					reposElements.append(liElement);
				});
			})
			.catch(error => {
				throw new Error(error);
			})
	});
}

