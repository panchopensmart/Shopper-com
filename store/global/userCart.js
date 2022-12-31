import {makeAutoObservable} from "mobx";

class UserCart {
    countProducts = 0
    nowBuyProduct;
    isLoaded = false
    error = null
    data = [];
    userSelectedProducts = []
    userPaymentCart = []
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

    addProductInPaymentCart (card) {
        this.userPaymentCart.push(card)
        this.deleteProductInPaymentCart(card)
    }

    deleteProductInPaymentCart(card) {
        this.data = this.data.filter((e) => {
            return e.id !== card.id
        })
    }


    addUserSelectedProducts(product) {
        this.userSelectedProducts.push(product)

    }
}

export default new UserCart()