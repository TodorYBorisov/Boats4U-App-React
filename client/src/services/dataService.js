import { del, get, post, put } from './apiServices.js';

// заявка за всички данни от базата
// export async function getAllData() {
//     return get('/data/boats?sortBy=_createdOn%20desc');
// }

export async function getAllData() {
    return get('/data/boats');
}

export async function createBoat(data) {
    return post('/data/boats', data);
}

export async function getBoatById(id) {
    return get(`/data/boats/${id}`);
}

export async function deleteBoat(id) {
    return del(`/data/boats/${id}`);
}

export async function editBoat(id, data) {
    return put(`/data/boats/${id}`, data);
}

export async function getMyBoats(userId) {
    return get(`/data/boats?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export function getSearchedItem(query) {
    return get(`/data/boats?where=name%20LIKE%20%22${query}%22&sortBy=_createdOn%20desc`);
}

export async function likeBoat(boatId) {
    return post('/data/likes', {boatId});
}

export async function likesForBoat(boatId){
    return get(`/data/likes?where=boatId%3D%22${boatId}%22&distinct=_ownerId&count`);
}

export async function canLike(boatId, userId) {
    return get(`/data/likes?where=boatId%3D%22${boatId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

//=================================


export const like = (userId, boatId) => post('/data/likes', {userId, boatId });
export const getAllLikes = () => get('/data/bookings');

// export const getBoatLikes = (boatId) => {
//     // const query = encodeURIComponent(`boatId="${boatId}"`);
//     const query = `boatId=${encodeURIComponent(boatId)}`;

//     return get(`${host}/likes?select=userId&where=${query}`)
//         .then(res => res.map(x => x.userId))
//         .catch(error => console.log(error));
// };


export const book = (userId, boatId) => post('/data/bookings', {userId, boatId});

export const getAllBookings = () => get('/data/bookings');