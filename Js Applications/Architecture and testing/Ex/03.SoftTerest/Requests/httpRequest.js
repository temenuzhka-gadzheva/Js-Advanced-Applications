import auth from "../services/authentication.js";


export async function requestOfJson(url, method, body, isAuthorized, skipResult) {
    try {
        if (method === undefined) {
            method = 'GET';
        }

        let headers = {};
        if (['POST', 'POST'].includes(method.toUpperCase())) {
            headers['Content-Type'] = 'application/json';
        }

        if(isAuthorized){
            headers['X-Authorization'] = auth.getAuthToken();
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
            throw new Error(`${response.status} -- ${response.statusText}\n${message}`);
        }

        let result = undefined;
        if(!skipResult){
            result = await response.json();
        }

        return result;

    } catch (err) {
        alert(err.message);
    }
}