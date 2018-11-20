import thunk from "redux-thunk";
import { Reducers } from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";

export const Store = createStore(
    Reducers,
    applyMiddleware(thunk)
);
