import navigation from "../navigation.js";
import viewSections from "../viewSections.js";
import { requestWithJson } from "./httpRequests.js";


async function register(newUser) {
    try {
        let url = 'http://localhost:3030/users/register';
        let method = 'POST';
        let registerResult = await requestWithJson(url, method, newUser);

        localStorage.setItem('authToken', registerResult.accessToken);
        localStorage.setItem('userId', registerResult._id);
        localStorage.setItem('userName', registerResult.email);

        navigation.loginUser();
    } catch (err) {
        alert(err);
    }
}

async function login(loginUser) {
    try {
        let url = 'http://localhost:3030/users/login';
        let method = 'POST';
        let loginResult = await requestWithJson(url, method, loginUser);

        localStorage.setItem('authToken', loginResult.accessToken);
        localStorage.setItem('userId', loginResult._id);
        localStorage.setItem('userName', loginResult.email);

        navigation.loginUser();
    } catch (error) {
        alert(error);
    }
}

async function logout() {
    try {
        let url = 'http://localhost:3030/users/logout';
        let method = 'GET';
        await requestWithJson(url, method, undefined, true, true);

        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');

        navigation.logoutUser();
        return viewSections.redirectTo('login');
    } catch (err) {
        alert(err);
    }
}


function getUserName() {
    return localStorage.getItem('userName');
}

function getUserId() {
    return localStorage.getItem('userId');
}

function getAuthToken() {
    return localStorage.getItem('authToken');
}

function cleanStorage() {
    localStorage.clear();
}

function isLoggedIn() {

    let authToken = localStorage.getItem('authToken');

    if (authToken !== undefined && authToken !== null) {
        return authToken;
    }

}


let auth = {
    login,
    register,
    logout,
    getAuthToken,
    getUserId,
    cleanStorage,
    isLoggedIn,
    getUserName,

};
export default auth;