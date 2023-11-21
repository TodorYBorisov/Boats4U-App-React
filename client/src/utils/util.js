const auth = 'user';

// взима потребителските данни
// export function getUserData() {
//     return JSON.parse(localStorage.getItem(itemName));
// }

// запазваме потребителските данни в localStorage
export function setUserData(data) {
    return localStorage.setItem(auth, JSON.stringify(data));
}

// изтриваме потребителските данни
export function clearUserData() {
    localStorage.removeItem(auth);
}


export function getUserData() {
    return JSON.parse(localStorage.getItem(auth));
}

export async function isAuthenticated() {
    return Boolean(getUserData());
}