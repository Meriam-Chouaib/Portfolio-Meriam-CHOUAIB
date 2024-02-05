import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { booksApi } from 'redux/api/books/booksApi'
import appSlice from 'redux/slices/app/appSlice'

const rootReducer = combineReducers({
  appReducer: appSlice,
  [booksApi.reducerPath]: booksApi.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      booksApi.middleware,
    ]),
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
