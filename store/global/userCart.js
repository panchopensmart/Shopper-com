import {makeAutoObservable} from "mobx";

class UserCart {
    isLoaded = false
    error = null
    data = [];
    userId = 15 //TODO получить это значение их session() - next Auth
    url = `https://dummyjson.com/carts/${this.userId}`
    constructor() {
        makeAutoObservable(this)
    }

    fetchUserCart() {
        fetch(this.url)
            .then(res => res.json())
            .then(result => {
                this.isLoaded = true
                this.data = result
            })
            .catch(e => this.error = e.message)
    }
}

export default new UserCart()