

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
let deleteButtons = moviDetailsSection.getElementsByClassName("btn btn-danger delete-btn");
let editButtons = moviDetailsSection.getElementsByClassName("btn btn-warning edit-btn");
let likeButtons = moviDetailsSection.getElementsByClassName("btn btn-primary like-btn");

let detailsContainer = moviDetailsSection.querySelector('.container');
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
function registerDeleteButtonListener() {
    for (let deleteBtn of deleteButtons) {
        deleteBtn.addEventListener('click', function () {
            let movieId = this.getAttribute("data");

            deleteMovie(movieId);
            moviDetailsSection.remove();
            location.reload();
        })
    }
}

function registerEditButtonListener() {


    // sorry not work :(
    for (let editBtn of editButtons) {

        editBtn.addEventListener('click', function () {

            let movieId = this.getAttribute("data");

            let title = addMovieForm.querySelector('input[name="title"]');
            let description = addMovieForm.querySelector('textarea[name="description"]');
            let img = addMovieForm.querySelector('input[name="imageUrl"]');

            let editedTitle = moviDetailsSection.querySelector('.title-' + movieId)
            let editedDescription = moviDetailsSection.querySelector('.desc-' + movieId)
            let editedImg = moviDetailsSection.querySelector('.img-' + movieId);


            // editedTitle.textContent = title;
            //  console.log(editedTitle); return;

        })
    }
}

function registerLikeButtonListener() {


    for (let likeBtn of likeButtons) {

        likeBtn.addEventListener('click', function () {
            let movieId = this.getAttribute("data");
            let likeSpan = moviDetailsSection.querySelector(".likeSpan-" + movieId);

            toggleHiddenClass(likeBtn, true);

            let value = likeSpan.textContent;

            likeSpan.textContent = Number.parseInt(value) + 1;
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

            let movieTemplate = `<div class="row bg-light text-dark movie">
           <h1 class="movie-heading title-${data._id}"> Movie title: ${data.title}</h1>

                <div class="col-md-8">
                    <img class="img-thumbnail movie img-${data._id}"
                        src="${data.img}" alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p  class="movie-description desc-${data._id}">${data.description}</p>
                    <a class="btn btn-danger delete-btn" data="${data._id}" href="#">Delete</a>
                    <a class="btn btn-warning edit-btn" data="${data._id}" href="#">Edit</a> 
                    <a class="btn btn-primary like-btn" data="${data._id}"  href="#">Like</a>
                    Liked: <span class="enrolled-span likeSpan-${data._id}">0</span>
                </div>
            </div>`;


            let detailsContainer = moviDetailsSection.querySelector('.container');
            detailsContainer.innerHTML = movieTemplate;

            isUserAuthorOfMovie(data);
            registerEditButtonListener();
            registerDeleteButtonListener();
            registerDetailsButtonListener();
            registerLikeButtonListener();
            hideSections(moviDetailsSection);

        }).catch(error => alert(error.message));
}

function isUserAuthorOfMovie(data) {
    if (data._ownerId !== localStorage.getItem("userId")) {
        let editBtn = detailsContainer.querySelector('.edit-btn');
        let deleteBtn = detailsContainer.querySelector('.delete-btn');
        toggleHiddenClass(editBtn, true);
        toggleHiddenClass(deleteBtn, true);
    } else {
        let likeBtn = detailsContainer.querySelector('.like-btn');
        toggleHiddenClass(likeBtn, true);
    }
}

function getAuthorization() {

    return localStorage.getItem('accessToken');
}

function deleteMovie(id) {
    let movieUrl = `http://localhost:3030/data/movies/${id}`;

    fetch(movieUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization': getAuthorization()
        }
    }).then(response => response.json())
        .then(data => {
            alert('Successfully deleted movie!')
        })
        .catch(err => {
            alert(err.message);
        })
}

function editMovie(id) {
    // sorry not work :(
    let title = addMovieForm.querySelector('input[name="title"]').value;
    let description = addMovieForm.querySelector('textarea[name="description"]').value;
    let img = addMovieForm.querySelector('input[name="imageUrl"]').value;
    let movieUrl = `http://localhost:3030/data/movies/${id}`;

    fetch(movieUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization': getAuthorization()
        },
        body: JSON.stringify({ title, description, img })
    }).then(response => response.json())
        .then(data => {
            hideSections(!createMovie);

            alert('Successfully updated movie!')
        })
        .catch(err => {
            alert(err.message);
        })

}

printWelcomeMessage(isUserLogged);
toggleNavigation(isUserLogged);
showDefaultSections();
attachEventListeners();
loadMovies();