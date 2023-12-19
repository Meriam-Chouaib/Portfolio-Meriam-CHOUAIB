import { Box, styled, TextField } from '@mui/material'

export const TextFieldStyle = styled(TextField)({
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
  },
})

export const BoxStyle = styled(Box)(({ theme }) => ({
  fill: theme.palette.grey[500],
  paddingTop: 6,
  alignItems: 'center',
  '&:hover > *': {
    fill: theme.palette.primary.main,
  },
}))
