import { ThemeOptions } from '@mui/material/styles'
import breakpoints from 'theme/breakpoints'
import typography from 'theme/typography'

const paletteDark: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#110835',
      dark: '#080808',
      light: '#380855',
      contrastText: '#7bbfc3',
    },
    secondary: {
      main: '#ce18b8',
      light: '#f2b1df',
      dark: '#290928',
      contrastText: '#fff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#36054a',
      400: '#bdbdbd',
      500: '#9e9e9e',
    },
    error: {
      main: '#461959',
    },
    background: {
      paper: '#110835',
      default: '#110835',
    },
    text: {
      primary: '#7bbfc3',
      secondary: '#6df7ff',
    },
  },
  typography,
  breakpoints,
}

export default paletteDark
