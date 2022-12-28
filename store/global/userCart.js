import {makeAutoObservable} from "mobx";

class UserCart {
    isReloaded = false
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
                this.data = result.products
            })
            .catch(e => this.error = e.message)
    }

    fetchCartByReloadPage() {
        fetch(this.url)
            .then(res => res.json())
            .then(result => {
                this.isReloaded = !this.isReloaded
                this.isLoaded = true
                this.data = result.products
            })
            .catch(e => this.error = e.message)
    }
}

export default new UserCart()