import { createTheme } from '@mui/material/styles'
import { AppThemes } from 'config/enums/theme.enums'
import ComponentsOverrides from 'theme/overrides'
import paletteDark from 'theme/theme.dark'
import paletteLight from 'theme/theme.light'

const generateTheme = (mode: AppThemes) => {
  switch (mode) {
    case AppThemes.DARK_MODE: {
      const theme = createTheme(paletteDark)
      theme.components = ComponentsOverrides(theme)
      return theme
    }
    case AppThemes.LIGHT_MODE: {
      const theme = createTheme(paletteLight)
      theme.components = ComponentsOverrides(theme)
      return theme
    }
  }
}

export default generateTheme
