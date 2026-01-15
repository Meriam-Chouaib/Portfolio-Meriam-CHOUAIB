import { ThemeOptions } from '@mui/material/styles'
import breakpoints from 'theme/breakpoints'
import typography from 'theme/typography'

const paletteDark: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', // Royal Blue - Trust & Professionalism
      light: '#60a5fa', // Light Blue
      dark: '#2563eb', // Deep Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#06b6d4', // Cyan - Modern Tech Feel
      light: '#67e8f9',
      dark: '#0891b2',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f172a', // Slate 900 - Deepest Navy
      paper: '#1e293b', // Slate 800 - Card Background
    },
    text: {
      primary: '#f8fafc', // Slate 50 - High Contrast
      secondary: '#94a3b8', // Slate 400 - Muted
    },
    error: {
      main: '#ef4444',
    },
    success: {
      main: '#22c55e',
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  typography,
  breakpoints,
}

export default paletteDark
