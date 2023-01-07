import {makeAutoObservable} from "mobx";
import userData from "../global/userData";

class FactoryAccountState {
    handleClickUserState;

    constructor() {
        makeAutoObservable(this)
    }

    addPaymentCard() {
        this.handleClickUserState = Object.entries({...userData.data.bank})
    }

    addAddress() {
        this.handleClickUserState = Object.entries({
            ...userData.data.address,
            coordinates: `"${userData.data.address.coordinates.lat}" "${userData.data.address.coordinates.lng}"`
        })
    }

    addAccountData () {
        const {birthDate, email, ip, phone, image, age} = userData.data
        this.handleClickUserState = Object.entries({
            image, phone, email, age, ip , birthDate
        })
    }

    addOtherData () {
        const {gender, university, bloodGroup} = userData.data
        this.handleClickUserState = Object.entries({
            gender, university, bloodGroup
        })
    }

    create(type) {
        switch (type) {
            case 'paymentCard':
                return this.addPaymentCard()
            case 'addAddress':
                return  this.addAddress()
            case 'addAccountData':
                return this.addAccountData()
            case 'addOtherData':
                return  this.addOtherData()
            default:
                break
        }
    }
}


export default new FactoryAccountState()