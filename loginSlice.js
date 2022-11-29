import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'loginStatus',
  initialState: {
    loggedIn: false
  },
  reducers: {
    increment: state => {
      state.value = true
    },
  }
})

export const { increment } = loginSlice.actions
export default loginSlice.reducer
