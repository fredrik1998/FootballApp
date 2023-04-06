import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginRequest: (state) => {
      state.loading = true
    },
    userLoginSuccess: (state, action) => {
      state.loading = false
      state.userInfo = action.payload
      state.error = null
    },
    userLoginFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    userLogout: (state) => {
      state.userInfo = null
    },
    userRegisterRequest: (state) => {
      state.loading = true
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false
      state.userInfo = action.payload
      state.error = null
    },
    userRegisterFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
} = userSlice.actions

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userLoginRequest())

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/users/login/', { username: email, password: password }, config)

    dispatch(userLoginSuccess(data))

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch(userLoginFail(error.response && error.response.data.detail ? error.response.data.detail : error.message))
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch(userLogout())
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(userRegisterRequest())

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/users/register/', { name, email, password }, config)

    dispatch(userRegisterSuccess(data))
    dispatch(userLoginSuccess(data))
  } catch (error) {
    dispatch(userRegisterFail(error.response && error.response.data.detail ? error.response.data.detail : error.message))
  }
}

export default userSlice.reducer
