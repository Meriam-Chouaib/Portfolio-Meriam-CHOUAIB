import { ThemeOptions } from '@mui/material/styles'
import breakpoints from 'theme/breakpoints'
import typography from 'theme/typography'

const paletteLight: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#461959',
      dark: '#36054a',
      light: '#7ED7C1',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#50C9BA',
      light: '#9EE6CF',
      dark: '#4BA2AC',
      contrastText: '#461959',
    },
    error: {
      main: '#FFF',
    },
    text: {
      primary: '#FFF',
    },
  },
  typography,
  breakpoints,
}

export default paletteLight
