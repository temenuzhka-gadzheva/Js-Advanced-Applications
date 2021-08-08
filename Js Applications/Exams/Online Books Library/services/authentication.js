import {requestOfJson} from "./httpRequest.js";


let baseUrl = 'http://localhost:3030/users';

function saveUserInfo(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    let user = localStorage.getItem('user') === null
        ? undefined
        : JSON.parse(localStorage.getItem('user'));

    return user;
}

async function login(user) {
    let result = await requestOfJson(`${baseUrl}/login`, 'Post', user);
    saveUserInfo(result);
}

async function register(user) {
    let result = await requestOfJson(`${baseUrl}/register`, 'Post', user);
    saveUserInfo(result);
}

async function logout() {
    await requestOfJson(`${baseUrl}/logout`, 'Get', undefined, true, true);
    localStorage.clear();
}

export default {
    saveUserInfo,
    getUser,
    login,
    register,
    logout
}