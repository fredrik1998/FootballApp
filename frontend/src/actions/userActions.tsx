import axios from "axios";
import { Dispatch } from 'redux'
import 
{ 
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
 } from "../constants/userConstants";


 export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
      try {
        dispatch({ type: USER_LOGIN_REQUEST });
  
        const config = {
          headers: {
            'Content-type': 'application/json',
          },
        };
  
        const { data } = await axios.post(
          '/api/users/login/',
          { username: email, password },
          config
        );
  
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
      } catch (error: any) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
        });
      }
    };
  };

export const logout = () => async(dispatch: Dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({type:USER_LOGOUT})
}

export const register = (name:string, email:string, password:string) => async(dispatch: Dispatch) => {
  try{
  dispatch({type: USER_REGISTER_REQUEST});

  const config = {
      headers: {
          'Content-type':'application/json'
      }
  }
  const {data} = await axios.post(
      "/api/users/register/",
      {'name': name, 'email': email, 'password': password}, config
  );

  dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
  });

  dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
  });
}
 catch(error: any){
  dispatch({
      type: USER_REGISTER_FAIL,
      payload:
      error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
  })
 }
}

