import {makeAutoObservable} from "mobx";

class UserData {
    isLoaded = false
    error = null
    data = [];
    userId = 15 //TODO получить это значение их session() - next Auth
    url = `https://dummyjson.com/users/${this.userId}`
    constructor() {
        makeAutoObservable(this)
    }

    fetchUserData() {
        fetch(this.url)
            .then(res => res.json())
            .then(result => {
                this.isLoaded = true
                this.data = result
            })
            .catch(e => this.error = e.message)
    }
}

export default new UserData()