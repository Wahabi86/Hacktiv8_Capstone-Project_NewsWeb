import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import newsReducer from "./newsSaved";

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
