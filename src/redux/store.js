import { createStore } from "redux";
import { rootReducer } from "./reducers";

//  reating store 
const store = createStore(rootReducer,
    // in production we need to comment this 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;