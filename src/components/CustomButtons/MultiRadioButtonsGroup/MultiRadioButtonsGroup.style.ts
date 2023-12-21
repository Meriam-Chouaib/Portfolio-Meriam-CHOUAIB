import { Box, styled } from '@mui/material'

export const RadioBoxStyle = styled(Box)(({ theme }) => ({
  width: 18,
  height: 18,
  borderRadius: '50%',
  border: `1px solid ${theme.palette.grey[300]}`,
  outline: '1px solid transparent',
  backgroundColor: theme.palette.grey[50],
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}))

export const CheckedRadioBoxStyle = styled(Box)(({ theme }) => ({
  width: 18,
  height: 18,
  borderRadius: '50%',
  border: `1px solid ${theme.palette.primary.main}`,
  outline: '1px solid transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const CheckedRadioStyle = styled(Box)(({ theme }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
}))

export const BoxIconStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  minWidth: 54,
  minHeight: 54,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down(450)]: {
    display: 'none',
  },
}))
