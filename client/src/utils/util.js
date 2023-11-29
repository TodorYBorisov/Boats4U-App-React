const auth = 'user';

// export function getUserData() {
//     return JSON.parse(localStorage.getItem(itemName));
// }

export function setUserData(data) {
    return localStorage.setItem(auth, JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem(auth);
}

export function getUserData() {
    return JSON.parse(localStorage.getItem(auth));
}

export async function isAuthenticated() {
    return Boolean(getUserData());
}