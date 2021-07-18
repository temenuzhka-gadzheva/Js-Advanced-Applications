import { ce as createHTMLelement } from "../createHTMLelement/dom.js";
import auth from "../authentication/auth.js";
import { jsonRequest as requestWithJson } from  "./httpRequests.js";
import viewSections from "../viewSections.js";

let homeSection = undefined;
let addMovieButton = undefined

export function initialization(htmlSection) {
    homeSection = htmlSection;
    addMovieButton = homeSection.querySelector('#add-movie-btn');
}

function createHtmlMovie(movie) {
    let movieImgEelment = createHTMLelement('img', { class: 'card-img-top', src: movie.img, alt: 'Card image cap', width: '400' });
    let cardBodyDivElement = createHTMLelement('div', { class: 'card-body' }, createHTMLelement('h4', { class: 'card-title' }, movie.title));

    let detailsButtonElement = createHTMLelement('button', { type: 'button', class: 'btn btn-info' }, 'Details');
    let linkAnchorElement = createHTMLelement('a', { class: 'link', "data-route": `details/${movie._id}`, href: `#/details/${movie._id}` });
   
    if(auth.isLoggedIn()){
        linkAnchorElement.appendChild(detailsButtonElement);
    }

    linkAnchorElement.addEventListener('click', viewSections.navigationHandler);
    let cardFooterDivEelement = createHTMLelement('div', { class: 'card-footer' }, linkAnchorElement);

    let movieCardDivElement = createHTMLelement('div', { class: 'card mb-4 movie' }, movieImgEelment, cardBodyDivElement, cardFooterDivEelement);
    return movieCardDivElement;
}

async function moviePopulation() {
    try{
        let url = 'http://localhost:3030/data/movies';
        let movies = await requestWithJson(url, 'GET');

        let moviesContainerElement = homeSection.querySelector('#home-movies-container');
        moviesContainerElement.querySelectorAll('.movie').forEach(x => x.remove());
       
        if(!auth.isLoggedIn()) {
            addMovieButton.remove();
        } else {
            let moviesHeadingElement = homeSection.querySelector('#movies-heading');
            moviesHeadingElement.after(addMovieButton);
        }
        
        moviesContainerElement.append(...movies.map(x => createHtmlMovie(x)));
    } catch(error){
   
        alert(error);
    }
}


export async function getView() {
    await moviePopulation();
    return homeSection;
}



let homePage = {
    initialize: initialization,
    getView
}

export default homePage;