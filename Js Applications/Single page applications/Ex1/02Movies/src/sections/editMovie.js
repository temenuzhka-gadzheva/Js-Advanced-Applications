import viewSections from "../viewSections.js";
import { jsonRequest as requestWithJson } from "../authentication/httpRequests.js";

let editMovieSection = undefined;

export function initialization(htmlSection) {
    editMovieSection = htmlSection;

    let editMovieForm = editMovieSection.querySelector('form');

    editMovieForm.addEventListener('submit', editMovie);
}



async function editMovie(e) {
    e.preventDefault();
    try {
        let editForm = e.target;

        let formData = new FormData(editForm);

        let movieId = formData.get('id');

        let editedMovie = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageUrl')
        }

        let url = `http://localhost:3030/data/movies/${movieId}`;
        let method = 'PUT';
        await requestWithJson(url, method, editedMovie, true);

        editForm.reset();
        viewSections.navigateTo('details', movieId);
    } catch (error) {

        alert(error);
    }
}

export async function getView(id) {
    try {
        let url  = `http://localhost:3030/data/movies/${id}`;
        let movie = await requestWithJson(url);

        let titleInputElement = editMovieSection.querySelector('input[name="title"]');
        let descriptionTextareaElement = editMovieSection.querySelector('textarea[name="description"]');
        let imageInputElement = editMovieSection.querySelector('input[name="imageUrl"]');
        let movieIdInputElement = editMovieSection.querySelector('input[name="id"]');

        titleInputElement.value = movie.title;
        descriptionTextareaElement.value = movie.description;
        imageInputElement.value = movie.img;
        movieIdInputElement.value = id;
        
        return editMovieSection;
    } catch (err) {
        alert(err);
    }
}
let editMoviePage = {
    initialize: initialization,
    getView
}

export default editMoviePage;