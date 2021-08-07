import { requestOfJson } from "./httpRequest.js";

let baseUrl = 'http://localhost:3030/data/memes';

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

/*async function getAllCars(){
    let result = await requestOfJson(baseUrl + `?sortBy=_createdOn%20desc`);
    return result;
}*/

async function getUserMemes(userId){
    let result = await requestOfJson(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    return result;

}/*
async function getAllMatchedCars(query){
    let result = await requestOfJson(`${baseUrl}?where=year%3D${query}`);
    return result;
}
*/

export default {
    getAll,
    get,
    create,
    edit,
    del,
    getUserMemes
   /* getAllCars,
    getUserCars,
    getAllMatchedCars*/
}