import { ThemeOptions } from '@mui/material/styles'
import breakpoints from 'theme/breakpoints'
import typography from 'theme/typography'

const paletteDark: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#AD2184',
      dark: '#BC1089',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#AD2184',
      light: '#f2b1df',
      dark: '#f5f5f5',
      contrastText: '#f5f5f5',
    },
    error: {
      main: '#461959',
    },
    text: {
      primary: '#0e7cb4',
    },
  },
  typography,
  breakpoints,
}

export default paletteDark
