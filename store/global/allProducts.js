import {makeAutoObservable} from "mobx";

class allProducts {
    error = null
    data = [];
    url = 'https://dummyjson.com/products'
    constructor() {
        makeAutoObservable(this)
    }

    fetchAllProducts() {
        fetch(this.url)
            .then(res => res.json())
            .then(result => this.data = result.products)
            .catch(e => this.error = e.message)
    }
}

export default new allProducts()