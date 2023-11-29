import { clearUserData} from '../utils/util.js';
import { get, post } from './apiServices.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

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