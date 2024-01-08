import { Box, Typography, styled } from '@mui/material'

export const RootStyle = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '75%',
  minWidth: '200px',
  minHeight: '200px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '90%',
  },
}))

export const BoxStyle = styled(Box)(({ theme }) => ({
  fill: theme.palette.grey[500],
  paddingTop: 6,
  alignItems: 'center',
  '&:hover > *': {
    fill: theme.palette.primary.main,
  },
}))

export const TypographyStyle = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  '&: hover': {
    color: theme.palette.primary.main,
  },
}))

export const CheckboxRootStyle = styled(Box)(({ theme }) => ({
  width: 18,
  height: 18,
  borderRadius: 2,
  border: `1px solid ${theme.palette.grey[300]}`,
  outline: '1px solid transparent',
  background: theme.palette.grey[100],
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}))

export const CheckedRootStyle = styled(Box)(({ theme }) => ({
  width: 18,
  height: 18,
  borderRadius: 2,
  border: `1px solid ${theme.palette.primary.main}`,
  outline: '1px solid transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const CheckedBoxStyle = styled(Box)(({ theme }) => ({
  width: 10,
  height: 10,
  borderRadius: '1px',
  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
}))
