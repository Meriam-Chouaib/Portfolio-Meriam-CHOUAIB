import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PageState {
  title: string
}
const initialState = { title: '' } as PageState
const pageSlice = createSlice({
  initialState,
  name: 'page-slice',
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload
    },
  },
})
export const { setTitle } = pageSlice.actions
export default pageSlice.reducer
