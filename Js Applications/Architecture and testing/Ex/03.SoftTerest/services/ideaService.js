import { requestOfJson } from "../Requests/httpRequest.js";


let baseUrl = 'http://localhost:3030';

async function createMovie(newMovie){
    let createResult = await requestOfJson(`${baseUrl}/data/movies`, 'Post', newMovie, true);
    return createResult;
}

async function editMovie(editedMovie, id){
    let updateResult = await requestOfJson(`${baseUrl}/data/movies/${id}`, 'Put', editedMovie, true);
    return updateResult;
}

async function getIdea(id){
    let idea = await requestOfJson(`${baseUrl}/data/ideas/${id}`);
    return idea;
}

async function getAllIdeas(){
    let url = `${baseUrl}/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`;
    let movies = await requestOfJson(url);
    return movies;
}

async function deleteIdea(id){
    let deleteResult = await requestOfJson(`${baseUrl}/data/ideas/${id}`, 'Delete', undefined, true);
    return deleteResult;
}

let ideaService = {
    createMovie,
    editMovie,
    getIdea,
    getAllIdeas,
    deleteIdea
}

export default ideaService;