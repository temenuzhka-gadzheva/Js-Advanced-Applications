

let main = document.querySelector('main');
let homeSection = main.querySelector('#home-page');
let movieSection = main.querySelector('#movie');
let addMovieSection = main.querySelector('#add-movie');
let moviDetailsSection = main.querySelector('#movie-details');
let moiveEditSection = main.querySelector('#edit-movie');
let loginSection = main.querySelector('#form-login');
let registerSection = main.querySelector('#form-sign-up');
let navigation = document.querySelector('nav');
let login = navigation.querySelector('#login');
let register = navigation.querySelector('#register');
let logout = navigation.querySelector('#logout');
let moviesLink = navigation.querySelector('#movies-link');
let welcomeLink = navigation.querySelector('#welcomeMsg');
let registrationForm = document.querySelector('#registration-form');
let addMovieButton = homeSection.querySelector('#add-movie-btn');
let addMovieForm = addMovieSection.querySelector('#addMovieForm');
let detailsButtons = movieSection.getElementsByClassName("details-btn");
let deleteButtons = moviDetailsSection.getElementsByClassName("delete-btn");
let editButtons = moviDetailsSection.getElementsByClassName("edit-btn");
let likeButtons = moviDetailsSection.getElementsByClassName("like-btn");




const allSections = [
    homeSection,
    movieSection,
    addMovieSection,
    moiveEditSection,
    moviDetailsSection,
    loginSection,
    registerSection
];

let isUserLogged = isAuthenticated();

printWelcomeMessage(isUserLogged);
toggleNavigation(isUserLogged);
showDefaultSections();
attachEventListeners();
loadMovies();

// Functions definitions

function attachEventListeners() {
    register.addEventListener('click', () => hideSections(registerSection));

    login.addEventListener('click', () => hideSections(loginSection));

    moviesLink.addEventListener('click', () => hideSections(homeSection, movieSection));

    logout.addEventListener('click', () => logoutUser());

    loginSection.addEventListener('submit', (e) => {
        e.preventDefault();
        loginUser();
    });
    addMovieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createMovie();
    });

    addMovieButton.addEventListener('click', () => {
        hideSections(addMovieSection);
    });

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let email = registrationForm.querySelector('input[name="email"]').value;
        let password = registrationForm.querySelector('input[name="password"]').value;
        let repeatPassword = registrationForm.querySelector('input[name="repeatPassword"]').value;

        let errorsField = registrationForm.querySelector('#errorMsg');

        if (password !== repeatPassword) {
            errorsField.textContent = 'Passwords don`t match';
            return;
        }

        let url = `http://localhost:3030/users/register`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        }).then(response => response.json()).then(data => {
            setUserDataInLocalStorageAndRefresh(data);
        }).catch(err => {
            alert(err);
        })
    });
}
function registerDetailsButtonListener() {
    for (let detailsBtn of detailsButtons) {
        detailsBtn.addEventListener('click', function () {
            let movieId = this.getAttribute("data");

            loadMovie(movieId);
        })
    }
}


function showDefaultSections() {
    toggleHiddenClass(addMovieSection, true);
    toggleHiddenClass(moviDetailsSection, true);
    toggleHiddenClass(moiveEditSection, true);
    toggleHiddenClass(loginSection, true);
    toggleHiddenClass(registerSection, true);
}

function toggleHiddenClass(element, shouldHide) {
    if (shouldHide) {
        element.setAttribute('class', 'hidden');
    } else {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        }

    }
}

function logoutUser() {
    localStorage.clear();
    location.reload();
}

function loginUser() {
    let email = loginSection.querySelector('input[name="email"]').value;
    let password = loginSection.querySelector('input[name="password"]').value;

    let url = `http://localhost:3030/users/login`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    }).then(response => response.json()).then(data => {

        if (data.code != undefined && data.code != 200) {
            alert(data.message);
            return;
        }

        setUserDataInLocalStorageAndRefresh(data);
    }).catch(err => {
        alert(err);
    })
}

function setUserDataInLocalStorageAndRefresh(data) {
    localStorage.setItem('email', data.email);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('userId', data._id);
    location.reload();
}

function toggleNavigation(isLogged) {
    toggleHiddenClass(login, isLogged);
    toggleHiddenClass(register, isLogged);
    toggleHiddenClass(logout, !isLogged);
    toggleHiddenClass(addMovieButton, !isLogged);
}

function hideSections(...excludedSections) {
    for (const section of allSections) {
        if (!excludedSections.includes(section)) {
            toggleHiddenClass(section, true);
        }
    }
    for (const excludedSection of excludedSections) {

        toggleHiddenClass(excludedSection, false);
    }

}

function isAuthenticated() {
    let loggedUser = localStorage.getItem('accessToken');

    return loggedUser != null && loggedUser !== undefined;
}

function printWelcomeMessage(isUserLogged) {
    if (!isUserLogged) {
        welcomeLink.textContent = `Welcome, guest`;
    } else {
        let email = localStorage.getItem("email");
        welcomeLink.textContent = `Welcome, ${email}`;
    }
}

function loadMovies() {

    let movieUrl = `http://localhost:3030/data/movies`;

    fetch(movieUrl)
        .then(response => response.json())
        .then(data => {
            let cardsTemplate = "";
            Object.values(data).forEach(el => {
                cardsTemplate += `<div class="card mb-4">
                    <img class="card-img-top" src="${el.img}" width="400">
                    <div class="card-body">
                        <h4 class="card-title">${el.title}</h4>
                    </div>
                    <div class="card-footer">
                        <a href="#/details/6lOxMFSMkML09wux6sAF">
                            <button type="button" class="btn btn-info details-btn" data="${el._id}">Details</button>
                        </a>
                    </div>
                </div>`;
            });

            let movieCards = movieSection.querySelector('#movie-cards');
            movieCards.innerHTML = cardsTemplate;

     
            registerDetailsButtonListener();
        }).catch(error => alert(error.message));
}

function createMovie() {
    let title = addMovieForm.querySelector('input[name="title"]').value;
    let description = addMovieForm.querySelector('textarea[name="description"]').value;
    let img = addMovieForm.querySelector('input[name="imageUrl"]').value;
    let createUrl = `http://localhost:3030/data/movies`;
    fetch(createUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization': getAuthorization()
        },
        body: JSON.stringify({
            title, description, img
        })
    }).then(response => response.json())
        .then(data => {
            location.reload();
        })
}

function loadMovie(id) {
    let movieUrl = `http://localhost:3030/data/movies/${id}`;

    fetch(movieUrl)
        .then(response => response.json())
        .then(data => {

            let movieTemplate = `<div class="row bg-light text-dark">
                <h1>Movie title: ${data.title}</h1>

                <div class="col-md-8">
                    <img class="img-thumbnail"
                        src="${data.img}" alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${data.description}</p>
                    <a class="btn btn-danger delete-btn" data="${data._id}" href="#">Delete</a>
                    <a class="btn btn-warning edit-btn" data="${data._id}" href="#">Edit</a> 
                    <a class="btn btn-primary like-btn" data="${data._id}" href="#">Like</a>
                    <span class="enrolled-span">Liked 1</span>
                </div>
            </div>`;

    
            let detailsContainer = moviDetailsSection.querySelector('.container');
            detailsContainer.innerHTML = movieTemplate;

            hideSections(moviDetailsSection);
      
        }).catch(error => alert(error.message));
}

function getAuthorization() {

    return localStorage.getItem('accessToken');
}

function deleteMovie(id){
    let movieUrl = `http://localhost:3030/data/movies/${id}`;

    fetch(movieUrl,{
        method: 'DELETE'
    }).then(response => response.json())
    .then(data =>{
        console.log(data);
    })
}

