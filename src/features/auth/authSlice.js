import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {buildQueries} from '@testing-library/react'
import authService from './authServices'

// localstorage get
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: '',
}

//register
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message = 'bad register'
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSucces = false
      state.isError = false
      state.message = false
    },
  },
  extraReducers: (build) => {
    build.addCase(register.pending, (state) => {})
  },
})

export const {reset} = authSlice.actions
export default authSlice.reducer
