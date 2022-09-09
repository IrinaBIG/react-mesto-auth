export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => { // Геннадий Барсегян! здесь у меня запросы в статусе 204 приходят. поэтому не Ок
    if (res) {
        // console.dir(res)
        return res.json();
    }
    return Promise.reject(`Возникла ошибка: ${res.status}`);
}

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then((res) => checkResponse(res));
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
    .then((res) => checkResponse(res))
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`,            
        }
    })
    .then((res) => checkResponse(res));
}