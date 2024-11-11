import { styled } from '@mui/material'
import { TextField } from 'components/hookform'

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  margin: '8px 0px',
  '.MuiInputBase-root': {
    borderRadius: '30px',
  },
}))
