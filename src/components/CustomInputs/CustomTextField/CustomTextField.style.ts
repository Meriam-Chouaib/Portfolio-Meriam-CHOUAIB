import { Box, styled, TextField } from '@mui/material'

export const TextFieldStyle = styled(TextField)(({ theme }) => ({
  // Remove arrows from the number input type

  'input::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  'input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  /* Firefox */
  'input[type=number]': {
    MozAppearance: 'textfield',
    color: theme.palette.primary.main,
  },
  ':hover': {
    boxShadow: `0px 1px 11px ${theme.palette.grey[200]}`,
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
