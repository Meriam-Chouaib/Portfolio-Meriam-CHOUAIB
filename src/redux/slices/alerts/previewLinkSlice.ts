import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PreviewLinkState {
  link: string | null
}

const initialState: PreviewLinkState = {
  link: null,
}

const previewLinkSlice = createSlice({
  initialState,
  name: 'previewLink',
  reducers: {
    openLinkPreview: (state, action: PayloadAction<string | null>) => {
      state.link = action.payload
    },
    closeLinkPreview: (state) => {
      state.link = null
    },
  },
})

export const { openLinkPreview, closeLinkPreview } = previewLinkSlice.actions
export default previewLinkSlice.reducer
