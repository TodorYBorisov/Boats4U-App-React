import { clearUserData} from '../utils/util.js';
import { get, post } from './apiServices.js';

// TODO да проверя пътя дали е такъв в документа с условието
const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

// TODO да се смени юзър обекта{} може да бъде (username, email, avatar, password)
// export async function login(email, password) {
//     const result = await post(endpoints.login, { email, password });
//     setUserData(result);
// }

// TODO тук да видя как е записано от html name дали e repasss е правилно, ако трябва подаваме repass
// export async function register(username, email, phone, gender, password) {
//     const result = await post(endpoints.register, { username, email, phone, gender, password });
//     setUserData(result);
// }


// ==================================================================================

export async function register(username, email, phone, gender, password) {
    const response = await post(endpoints.register, { username, email, phone, gender, password });
    return response;
}

export async function login(email, password) {
    const response = await post(endpoints.login, {email, password});
    return response;
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}


export const getUser = () => {
    let username = localStorage.getItem('user');
    
    console.log(username);
    return username;
};

// export const isAuthenticated = () => {
//     return Boolean(getUser());
// };
