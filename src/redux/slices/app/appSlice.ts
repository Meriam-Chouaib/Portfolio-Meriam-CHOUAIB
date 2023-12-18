import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppPaletteMode } from 'config/enums/app.enum'
import { AppThemes } from 'config/enums/theme.enums'

interface AppState {
  mode: AppPaletteMode
  theme: AppThemes
}

const initialState: AppState = {
  mode: AppPaletteMode.Light,
  theme: AppThemes.LIGHT_MODE,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<{ theme: AppThemes }>) => {
      const { theme } = action.payload
      if (state.mode === AppPaletteMode.Light) {
        switch (theme) {
          case AppThemes.DARK_MODE:
            state.theme = AppThemes.DARK_MODE
            break
          case AppThemes.LIGHT_MODE:
            state.theme = AppThemes.LIGHT_MODE
            break

          default:
            state.theme = AppThemes.LIGHT_MODE
            break
        }
      }
    },
    switchMode: (state) => {
      state.mode =
        state.mode === AppPaletteMode.Light
          ? AppPaletteMode.Dark
          : AppPaletteMode.Light
    },
  },
})

export const { changeTheme, switchMode } = appSlice.actions
export default appSlice.reducer
