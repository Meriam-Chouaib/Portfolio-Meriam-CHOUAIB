import { LoadingButton } from '@mui/lab'
import { Typography, alpha, styled } from '@mui/material'

import { GlobalFonts } from 'config/constant/fonts.config'

export const LoadingButtonStyle = styled(LoadingButton)(({ theme }) => ({
  borderRadius: '65px',
  boxShadow: 'none',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light} 100%)`,
  color: theme.palette.common.white,
  padding: '13.5px 44px',
  fill: theme.palette.common.white,
  position: 'relative',
  transition: 'top boxShadow 2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0px 13px 15px ${alpha(theme.palette.primary.main, 0.27)}`,
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.grey[300],
    background: `${theme.palette.grey[300]} !important`,
    color: `${theme.palette.grey[500]} !important`,
    fill: theme.palette.grey[500],
  },
  '&.MuiLoadingButton-loading': {
    color: `${theme.palette.grey[300]} !important`,
    fill: theme.palette.grey[300],
  },
}))

export const TextButtonStyle = styled(Typography)(() => ({
  fontSize: '1rem',
  fontFamily: GlobalFonts.FONT_PRIMARY,
  lineHeight: '1.563rem',
}))
