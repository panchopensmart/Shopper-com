import {makeAutoObservable} from "mobx";

class MainState {
    selectedCards = []
    constructor() {
        makeAutoObservable(this)
    }

    addSelectedCard(title) {
        this.selectedCards.push(title)
    }
}

export default new MainState()