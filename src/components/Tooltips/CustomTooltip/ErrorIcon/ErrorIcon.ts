import { styled } from '@mui/material'
import Icon from 'assets/icons/error.svg?react'

export const ErrorIcon = styled(Icon)(({ theme }) => ({
  fill: theme.palette.error.main,
  height: 20,
}))
