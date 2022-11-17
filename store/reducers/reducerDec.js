const DECREMENT = "DECREMENT"

const decrementCounter =  (state = [], action ) => {
    if (typeof state === "undefined"){
        return 0
    }

    switch (action.type) {
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

export default decrementCounter