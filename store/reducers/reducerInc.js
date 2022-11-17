const INCREMENT = "INCREMENT"

const incrementCounter =  (state = [], action ) => {
    if (typeof state === "undefined"){
        return 0
    }

    switch (action.type) {
        case INCREMENT:
            return state + 1
        default:
            return state
    }
}

export default incrementCounter;