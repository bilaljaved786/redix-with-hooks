// import { createStore } from "redux";
// import { rootReducer } from "./reducers";

// const store = createStore(rootReducer,
//     // in production we need to comment this
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

// ! refactored code with configureStore
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
