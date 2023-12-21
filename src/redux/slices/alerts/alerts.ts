import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlertObject } from 'types/interfaces/AlertObject'

interface AlertState {
  alert: AlertObject | null
}

const initialState: AlertState = {
  alert: null,
}

const alertSlice = createSlice({
  initialState,
  name: 'alert',
  reducers: {
    pushAlert: (state, action: PayloadAction<AlertObject>) => {
      state.alert = action.payload
    },
    closeAlert: (state) => {
      if (state.alert) {
        state.alert.active = false
      }
    },
    clearAlert: (state) => {
      state.alert = null
    },
  },
})

export const { pushAlert, clearAlert, closeAlert } = alertSlice.actions
export default alertSlice.reducer
