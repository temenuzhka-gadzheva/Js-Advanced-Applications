import auth from "./auth.js";


export async function requestWithJson(url, method, body, isAuthorized, actualResult) {
    let headers = {};

    if(['POST','PUT'].includes(method.toUpperCase())) {
        headers['Content-Type'] = 'application/json';
    }

    if (isAuthorized) {
        headers['X-Authorization'] = auth.getAuthToken();
    } 

    if(method === undefined){
        method = 'GET';
    }


    let options = {
        headers,
        method
    };

    if (body !== undefined) {
        options.body = JSON.stringify(body);
    }

    let response = await fetch(url, options);

    if (!response.ok) {

        let message = await response.text();
        throw new Error(`${response.status}: ${response.statusText}\n${message}`);
    }

    let result = undefined;
    
    if(!actualResult){
        result = await response.json();
    }

    return result;
}