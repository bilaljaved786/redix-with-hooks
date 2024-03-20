import { increment, decrement } from "../constants/types";

const initialState = {
    Counter: 20
}

// counter reducer action handled (INCREMENT,DECREMENT)
const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case increment:
            return {
                ...state,
                Counter: state.Counter + 1
            }
        case decrement:
            return {
                ...state,
                Counter: state.Counter - 1
            }
        default:
            return state;
    }
}

export { counterReducer }