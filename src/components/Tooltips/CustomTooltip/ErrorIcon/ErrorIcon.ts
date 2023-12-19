import { styled } from '@mui/material'
import { ReactComponent as Icon } from 'assets/icons/error.svg'

export const ErrorIcon = styled(Icon)(({ theme }) => ({
  fill: theme.palette.error.main,
  height: 20,
}))
