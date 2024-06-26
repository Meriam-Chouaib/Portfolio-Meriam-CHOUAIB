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
      contrastText: '#FFF',
    },
    secondary: {
      main: '#ce18b8',
      light: '#f2b1df',
      dark: '#290928',
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
