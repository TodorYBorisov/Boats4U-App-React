import { getUserData, clearUserData } from '../utils/util';

const host = 'http://localhost:3030';
  
// функцията която ще ни прави заявките
async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    };

    const user = getUserData();
    // ако имаме данни за потребителя сетваме headers
    if (user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    // ако имаме подадени данни сетваме body
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        let result;

        // 204 е няма съдържание
        if (response.status != 204) {
            result = await response.json();
        }
        // 403 забранен достъп
        if (response.ok == false) {
            if (response.status == 403) {
                clearUserData();

            }
            const error = result;
            throw error;
        }

        return result;

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

// правим заявките да са фиксирани
export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');