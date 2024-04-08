import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./rootSaga";
import authReducer from "../reducers/user.reducers";

const rootReducer = combineReducers({
    auth: authReducer,
})

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    
    sagaMiddleware.run(rootsaga); // Run additional sagas here
    return store;
  };
export default configureStore