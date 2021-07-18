import viewSections from "../viewSections.js";
import { requestWithJson } from "../authentication/httpRequests.js";

let addMovieSection = undefined;

export function initialization(htmlSection) {
    addMovieSection = htmlSection;

    let addMovieForm = addMovieSection.querySelector('form');
    addMovieForm.addEventListener('submit', addMovie);
}

async function addMovie(e) {
    e.preventDefault();
    try {
        let addMovieForm = e.target;

        let formData = new FormData(addMovieForm);

        let newMovie = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageUrl')
        }

        let url = 'http://localhost:3030/data/movies';
        let mehtod = 'POST';
        await requestWithJson(url, mehtod, newMovie, true);

        addMovieForm.reset();

        viewSections.navigateTo('home');

    } catch (error) {

        alert(error);
    }
}

export async function getView() {
    return addMovieSection;
}
let addMoviePage = {
    initialize: initialization,
    getView
}

export default addMoviePage;