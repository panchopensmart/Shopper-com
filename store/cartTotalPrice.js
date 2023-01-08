import {makeAutoObservable} from "mobx";

class CartTotalPrice {
    _priceInCards = []
    totalCartPrice = 0;
    constructor() {
        makeAutoObservable(this)
    }

    addProductInCart(id, price) {
        this._priceInCards.push(price)
        this.countCartPrice()
    }

    countCartPrice () {
        this.totalCartPrice = this._priceInCards.reduce((a, b) => a + b, 0)
    }

    plusOneProduct(price) {
        this.totalCartPrice = this.totalCartPrice + price
    }

    minusOneProduct(price) {
        this.totalCartPrice = this.totalCartPrice - price
    }

    deleteProductInTotalPrice(price) {
        const index = this._priceInCards.indexOf(price)
        if (index > -1){
            this._priceInCards.splice(index, 1)
        }

        this.countCartPrice() //TODO пофиксить
    }
}

export default new CartTotalPrice()