import {makeAutoObservable} from "mobx";

class CartTotalPrice {
    _priceInCards = []
    totalCartPrice = 0;
    constructor() {
        makeAutoObservable(this)
    }

    addProductInCart(price) {
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

    deleteProductInTotalPrice(totalPrice) {
        this.totalCartPrice = this.totalCartPrice - totalPrice
        if(this.totalCartPrice <= 0) {
            this.totalCartPrice = 0
            this._priceInCards = []
        }

    }



}

export default new CartTotalPrice()