import authetication from "./authetication.js";



export async function requestOfJson(url, method, body, isAuthorization, expectedResult) {
    if (method === undefined) {
        method = 'Get';
    }

    let headers = {};
    if (['post', 'put'].includes(method.toLowerCase())) {
        headers['Content-Type'] = 'application/json';
    }

    if (isAuthorization) {
        headers['X-Authorization'] = authetication.getUser().accessToken;
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

    let actualResult = undefined;

    if (!expectedResult) {
        actualResult = await response.json();
    }

    return actualResult;
}