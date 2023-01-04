import {makeAutoObservable} from "mobx";
import Notification from '../Notifications'
import cartTotalPrice from "../cartTotalPrice";

class UserCart {
    nowBuyProduct = []; //продукт который хотят купить прямо сейчас (массив сделан чтобы не нарушать концепцию приложенияы)
    isLoaded = false
    error = null
    data = []; //данные
    userSelectedProducts = []// выбраные продукты из картизы
    idSelectedProducts = []
    idNowBuyProduct = []
    userPaymentCart = []
    userId = 15 //TODO получить это значение из session() - next Auth
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

    addProductInPaymentCart(card) {
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
        this.idSelectedProducts.push(product.id)
        cartTotalPrice.PriceInCards.push(product.price)
    }

    addNowBuyProduct(card) {
        this.nowBuyProduct.push(card)
        Notification.MessageByProductNow = true //показать уведомление что нужно удалить если не будет оплаты
        this.idNowBuyProduct.push(card.id)

    }

    deleteNowBuyProduct(card) {
        this.nowBuyProduct = this.nowBuyProduct.filter((e) => {
            return e.id !== card.id
        })
        this.deleteNowBuyProductId(card.id)
    }

    deleteNowBuyProductId(cardID) {
        this.idNowBuyProduct = this.idNowBuyProduct.filter((e) => {
            return e !== cardID
        })
    }


    deleteUserSelectedProducts(card) {
        this.userSelectedProducts = this.userSelectedProducts.filter((e) => {
            return e.id !== card.id
        })
        this.deleteUserSelectedProductId(card.id)
    }

    deleteUserSelectedProductId(cardID) {
        this.idSelectedProducts = this.idSelectedProducts.filter(e=> e !== cardID)
    }
}

export default new UserCart()