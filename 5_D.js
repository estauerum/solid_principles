// инверсии зависимостей
class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data fetch')
    }
}

class Localstorage {
    get () {
        const dataLocalStorage = 'data from local storage'
        return dataLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localstorage = new Localstorage()
    }

    clientGet() {
        return this.localstorage.get()
    }
}
//база данных не зависит от обстракций низшего уровня, она зависит только от абстракций, которые мы передали в этот класс
class Database {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}

const db = new Database(new LocalStorageClient);

console.log(db.getData('rand'));

