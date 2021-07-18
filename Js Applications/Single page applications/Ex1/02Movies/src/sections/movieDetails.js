import auth from "../authentication/auth.js";
import viewSections from "../viewSections.js";
import { ce as createHTMLelement } from "../createHTMLelement/dom.js";
import { jsonRequest as requestWithJson } from "./httpRequests.js";

let movieDetailsSection = undefined;
let linkClass = undefined;

export function initialization(htmlSection, viewLinkClass) {
    movieDetailsSection = htmlSection;
    linkClass = viewLinkClass;
}


function createHtmlMovieInfo(movie, userLikeOrNot, allLikesOfMovie) {
    let movieHeadingElement = createHTMLelement('h1', undefined, `Movie title: ${movie.title}`);

    let movieImageElement = createHTMLelement('img', { class: 'img-thumbnail', src: movie.img, alt: 'Movie' });
    let imageDivElement = createHTMLelement('div', { class: 'col-md-8' }, movieImageElement);

    let descriptionHeadingElement = createHTMLelement('h3', { class: 'my-3' }, 'Movie Description');
    let descriptionParagElement = createHTMLelement('p', undefined, movie.description);

    let deleteButtonElement = createHTMLelement('a', { class: `btn btn-danger delete ${linkClass}`, 'data-route': `delete/${movie._id}`, href: `#/delete/${movie._id}` }, 'Delete');
    deleteButtonElement.addEventListener('click', viewSections.navigationHandler);

    let editButtonElement = createHTMLelement('a', { class: `btn btn-warning ${linkClass}`, 'data-route': `edit/${movie._id}`, href: `#/edit/${movie._id}` }, 'Edit');
    editButtonElement.addEventListener('click', viewSections.navigationHandler);

    let likeButtonElement = createHTMLelement('a', { class: `btn btn-primary like ${linkClass}`, 'data-route': `like/${movie._id}`, href: `#/like/${movie._id}` }, 'Like');
    likeButtonElement.addEventListener('click', viewSections.navigationHandler);

    let likesSpanElement = createHTMLelement('span', { class: 'enrolled-span likes' }, `Liked: ${allLikesOfMovie}`);

    let descriptionDivElement = createHTMLelement('div', { class: 'col-md-4 text-center' },
        descriptionHeadingElement, descriptionParagElement);

    if (auth.getUserId() === movie._ownerId) {

        descriptionDivElement.appendChild(deleteButtonElement);
        descriptionDivElement.appendChild(editButtonElement);
    }

    if (userLikeOrNot) {

        descriptionDivElement.appendChild(likeButtonElement);
    }

    descriptionDivElement.appendChild(likesSpanElement);

    let movieDivElement = createHTMLelement('div', { class: 'row bg-light text-dark movie-details', 'data-id': `${movie._id}` },
        movieHeadingElement, imageDivElement, descriptionDivElement);

    return movieDivElement;
}


export async function getView(movieId) {
    try {
        let url = `http://localhost:3030/data/movies/${movieId}`;
        let moviePromise = requestWithJson(url);

        let userId = auth.getUserId();

        let likesUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`
        let userLikesPromise = requestWithJson(likesUrl);

        let allLikesUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`;
        let likesPromise = requestWithJson(allLikesUrl);

        let [movie, arrOfUserLikes, allLikes] = await Promise.all([moviePromise, userLikesPromise, likesPromise]);

        let userLikeOrNot = true;

        if (arrOfUserLikes.length > 0 || auth.getUserId() === movie._ownerId) {
            userLikeOrNot = false;
        }

        let htmlMovieElement = createHtmlMovieInfo(movie, userLikeOrNot, allLikes);

        let movieContainerElement = movieDetailsSection.querySelector('.container');
        movieContainerElement.querySelectorAll('.movie-details').forEach(x => x.remove());

        movieContainerElement.appendChild(htmlMovieElement);

        return movieDetailsSection;

    } catch (error) {

        alert(error);
    }
}
export async function deleteMovie(movieId) {
    try {
        let url = `http://localhost:3030/data/movies/${movieId}`;
        let method = 'Delete';
        await requestWithJson(url, method, undefined, true);

        return viewSections.redirectTo('home');
    } catch (error) {

        alert(error);
    }
}

export async function likeMovie(movieId) {
    try {
        let body = { movieId: movieId };
        let likeUrl = `http://localhost:3030/data/likes`;
        let method = 'POST';
        await requestWithJson(likeUrl, method, body, true);

        let url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`;
        let movieLikesCounter = await requestWithJson(url);

        let likeButton = movieDetailsSection.querySelector('.like');
        likeButton.remove();

        let likesSpan = movieDetailsSection.querySelector('.likes');
        likesSpan.textContent = `Liked: ${movieLikesCounter}`;

        return viewSections.redirectTo('details', movieId);
    } catch (error) {

        alert(error);
    }
}

let movieDetailsPage = {
    initialize: initialization,
    getView,
    likeMovie,
    deleteMovie
}

export default movieDetailsPage;