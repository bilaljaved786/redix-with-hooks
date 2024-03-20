import { increment, decrement } from "../constants/types";

// define (INCREMENT,DECREMENT) ACTIONS
const INCREMENT = () => {
    return {
        type: increment
    }
}

const DECREMENT = () => {
    return {
        type: decrement
    }
}

export { INCREMENT, DECREMENT }