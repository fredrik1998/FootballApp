import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
 } from '../constants/userConstants'

 interface Action {
    type: string;
    payload?: any;
  }

  interface UserLoginState {
    loading?: boolean;
    error?: string;
    userInfo?: any;
  }
  
  
export const userLoginReducer = (state: UserLoginState = {}, action: Action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{...state, loading: true}

        case USER_LOGIN_SUCCESS:
            return{...state, loading: false, userInfo: action.payload as any}
            
        case USER_LOGIN_FAIL:
            return{...state, loading: false, error: action.payload as any}
            
        case USER_LOGOUT:
            return{}
            
        default:
            return state    
    }
 }

 export const userRegisterReducer = (state = {}, action: Action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return{...state, loading: true}

        case USER_REGISTER_SUCCESS:
            return{...state, loading: false, userInfo: action.payload as any}
        
        case USER_REGISTER_FAIL:
            return{...state, loading: false, error: action.payload as any}    

        default:
            return state    
    }
 }