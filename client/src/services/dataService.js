import { del, get, post, put } from './apiServices.js';
// // ВАЖНО !! провери всички пътища !! от word

// заявка за всички данни от базата
// export async function getAllData() {
//     return get('/data/boats?sortBy=_createdOn%20desc');
// }

//заявка за всички данни от базата без сортиране по дата на създаване
export async function getAllData() {
    return get('/data/boats');
}

//заявка за създаване на която подаваем деструктурирания обект от формата
export async function createBoat(data) {
    return post('/data/boats', data);
}

//заявка за взимане на конкретната книга/item на която сме влезли да води Към Details
export async function getBoatById(id) {
    return get(`/data/boats/${id}`);
}

// заявка за изтриваме елемента по id в details секцията
export async function deleteBoat(id) {
    return del(`/data/boats/${id}`);
}

// заявка за Edit на елемента
export async function editBoat(id, data) {
    return put(`/data/boats/${id}`, data);
}

// тук правим заявка да си вземем само неща които ние сме създали по id
export async function getMyBoats(userId) {
    return get(`/data/boats?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}


// заявка за търсене на нещо в масива от data
// export function getSearchedItem(query) {
//     return get(`/data/boats?where=name%20LIKE%20%22${query}%22`);
// }

// /data/boats?where=name%20LIKE%20%22${query}%22

// // заявка за да видим кой са лайкнатите
export async function likeBoat(boatId) {
    return post('/data/likes', {boatId});
}

export async function getAllLikesForBoatById(boatId) {
    return get(`/data/likes?where=boatId%3D%22${boatId}%22&distinct=_ownerId&count`);
}

export async function getLikeForUserById(boatId, userId) {
    return get(`/data/likes?where=boatId%3D%22${boatId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

//=================================

const host = 'http://localhost:3030/data/';
export const getLastTree = async () => {
    const response = await fetch(`${host}/boats`);
    const result = await response.json();

    const data = Object.values(result).slice(-3);

    return data;
};

//ако няма фетчър(apiService)
// export const create = async (boatData) => {
//     const response = await fetch(`${host}/boats`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(boatData)
//     });
//     const result = await response.json();
//     return result;
// };

export const like = (boatId) => post('/data/likes', { boatId });

export const getBoatLikes = (boatId) => {
    // const query = encodeURIComponent(`boatId="${boatId}"`);
    const query = `boatId=${encodeURIComponent(boatId)}`;

    return get(`${host}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId))
        .catch(error => console.log(error));
};

// export async function likeBoat(boatId) {
//     try {
//         const response = await post('/data/likes', { boatId });
//         return response; 
//     } catch (error) {
//         throw error;
//     }
// }