import { ThemeOptions } from '@mui/material/styles'
import breakpoints from 'theme/breakpoints'
import typography from 'theme/typography'

const paletteDark: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#7ED7C1', // Mint accent - consistent with light mode
      light: '#A0E8D5',
      dark: '#4BA2AC',
      contrastText: '#050505',
    },
    secondary: {
      main: '#6db5a2', // Soft lavender accent (complements mint)
      light: "#7ed7c1",
      dark: '#9C7BFF',
      contrastText: '#050505',
    },
    background: {
      default: '#0A0A12', // Deep blue-black base
      paper: '#151521', // Elevated surface with subtle blue tone
    },
    text: {
      primary: '#F0F0F8', // Soft off-white
      secondary: '#B8B8D0', // Muted lavender-grey
      disabled: '#6A6A80',
    },
    grey: {
      50: '#F8F8FC',
      100: '#F0F0F8',
      200: '#E0E0F0',
      300: '#C8C8E0',
      400: '#c5e0e1',
      500: '#205346',
      600: '#585880',
      700: '#404060',
      800: '#282840',
      900: '#181828',
    },
    error: {
      main: '#FF6B8B', // Professional coral red
      light: '#FFA0B4',
      dark: '#D94A6A',
    },
    warning: {
      main: '#FFC145',
      light: '#FFD685',
      dark: '#E0A020',
    },
    info: {
      main: '#4DABF7',
      light: '#80C9FF',
      dark: '#1A7FD9',
    },
    success: {
      main: '#51CF66', // Refined green
      light: '#85E696',
      dark: '#2A9D40',
    },
    divider: 'rgba(126, 215, 193, 0.12)', // Mint with subtle transparency
  },
  typography,
  breakpoints,
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: 'linear-gradient(135deg, #7ED7C1 0%, #4BA2AC 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8FE7D1 0%, #5BB2BC 100%)',
            boxShadow: '0 4px 12px rgba(126, 215, 193, 0.25)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #D0B4FF 0%, #9C7BFF 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #E0C4FF 0%, #AC8BFF 100%)',
            boxShadow: '0 4px 12px rgba(208, 180, 255, 0.25)',
          },
        },
        outlined: {
          borderColor: 'rgba(126, 215, 193, 0.3)',
          '&:hover': {
            borderColor: '#7ED7C1',
            backgroundColor: 'rgba(126, 215, 193, 0.08)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#151521',
          backgroundImage: 'none',
          borderBottom: '1px solid rgba(126, 215, 193, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#151521',
          backgroundImage:
            'linear-gradient(145deg, rgba(126, 215, 193, 0.03) 0%, rgba(208, 180, 255, 0.03) 100%)',
          border: '1px solid rgba(126, 215, 193, 0.08)',
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
        filledPrimary: {
          backgroundColor: 'rgba(126, 215, 193, 0.12)',
          color: '#A0E8D5',
        },
        filledSecondary: {
          backgroundColor: 'rgba(208, 180, 255, 0.12)',
          color: '#7ed7c1',
        },
      },
    },
  },
}

export default paletteDark
