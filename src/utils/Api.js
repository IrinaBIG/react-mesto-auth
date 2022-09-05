class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
    this._headers = {
      authorization: '90c75bce-c969-4e4d-866d-1b44dc526706',
      'Content-Type': 'application/json'
    }
  }

  _checkResponse = (res) => {
    if (res.ok) {
      // console.dir(res)
      return res.json();
    }
    return Promise.reject(`Возникла ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
      // 'authorization': this._token,
    })
    .then(this._checkResponse)
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  editUserInfo(data) {
    // console.log(data); 
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(this._checkResponse)
  }

    addCard(data) {
    
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
    .then(this._checkResponse)
  }

  toggleLike(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: isLiked ? 'DELETE' : 'PUT',
    })
      .then(this._checkResponse)
  }

  updateAvatar(avatarPlace) {
    const body = {
      avatar: avatarPlace
    };
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body)
    })
      .then(this._checkResponse)
  }
}

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-45');

export default api;