import { jsonRequest }  from "./httpRequest.js";


let baseUrl = 'http://localhost:3030/data/catalog';


async function getAll(){
    let allFurniture =  await jsonRequest(`${baseUrl}`);
    return allFurniture;
}

async function get(id){
    let furniture = await jsonRequest(`${baseUrl}/${id}`);
    return furniture;
}


async function create(item){
    let newFurniture = await jsonRequest(`${baseUrl}`, "Post", item ,true);
    return newFurniture;
}

async function update(item,id){
    let updateFurniture = await jsonRequest(`${baseUrl}/${id}`, "Put", item ,true,true);
    return updateFurniture;
}

async function del(id){
    let deleteFurniture = await jsonRequest(`${baseUrl}/${id}`, "Delete" ,undefined ,true,true);
    return deleteFurniture;
}

async function getClientFurnitures(userId){
    let clientFurnitures = await jsonRequest(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    return clientFurnitures;
}

export default {
    getAll,
    get,
    create,
    update,
    del,
    getClientFurnitures
}