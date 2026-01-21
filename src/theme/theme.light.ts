import { ThemeOptions } from '@mui/material/styles'
import breakpoints from 'theme/breakpoints'
import typography from 'theme/typography'

const paletteLight: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1e0329',
      dark: '#36054a',
      light: '#7ED7C1',
      contrastText: '#110835',
    },
    secondary: {
      main: '#36054a',
      light: '#9EE6CF',
      dark: '#4BA2AC',
      contrastText: '#7bbfc3',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#b5b8b9',
      400: '#230a41ff',

      500: '#34053eff',
    },
    error: {
      main: '#e02f2f',
    },
    success: {
      main: '#23810a',
    },

    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
    },
    text: {
      primary: '#110835',
      secondary: '#110835',
    },
  },
  typography,
  breakpoints,
}

export default paletteLight
