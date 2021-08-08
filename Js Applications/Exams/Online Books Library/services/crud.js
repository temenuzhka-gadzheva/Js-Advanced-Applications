import {requestOfJson} from "./httpRequest.js";

let baseUrl = 'http://localhost:3030/data/books';

async function getAll() {
    let result = await requestOfJson(`${baseUrl}?sortBy=_createdOn%20desc`);
    return result;
}


async function get(id) {
    let result = await requestOfJson(`${baseUrl}/${id}`);
    return result;
}

async function create(item) {
    let result = await requestOfJson(`${baseUrl}`, 'Post', item, true);
    return result;
}

async function edit(item, id) {
    let result = await requestOfJson(`${baseUrl}/${id}`, 'Put', item, true);
    return result;
}


async function del(id) {
    let result = await requestOfJson(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return result;
}


async function getUserBooks(userId){
    let result = await requestOfJson(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    return result;

}

async function  getTotalLikes(bookId){
    let result = await requestOfJson(`http://localhost:3030/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
 return result;
} 

async function getLike(bookId, userId){
    let result = await requestOfJson(`http://localhost:3030/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
return result;
}

export default {
    getAll,
    get,
    create,
    edit,
    del,
    getUserBooks,
    getTotalLikes,
    getLike

}