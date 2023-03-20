import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const userInfoFromLocalStorage = localStorage.getItem('userInfo');
const userInfo = userInfoFromLocalStorage
  ? JSON.parse(userInfoFromLocalStorage)
  : null;


const initialState = { 
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export type State = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch
export default store