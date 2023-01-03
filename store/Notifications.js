import {makeAutoObservable} from "mobx";

class Notifications {

    MessageByProductNow = false

    constructor() {
        makeAutoObservable(this)
    }

}

export default new Notifications()