import { Theme } from '@mui/material'

export default function Link(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  }
}
