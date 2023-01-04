import {makeAutoObservable} from "mobx";

class CartTotalPrice {
    PriceInCards = []
    constructor() {
        makeAutoObservable(this)
    }

    countCartPruce (price) {
        this.totalCount += price
    }

    sumTotalCount(price) {
        this.totalCount + price
    }

    minusTotalCount(price) {
        this.totalCount - price
    }
}

export default new CartTotalPrice()