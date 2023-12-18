import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appSlice from 'redux/slices/app/appSlice'

const rootReducer = combineReducers({
  appReducer: appSlice,
})
export const store = configureStore({
  reducer: rootReducer,
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
