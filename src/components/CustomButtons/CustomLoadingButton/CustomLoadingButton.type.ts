import { SxProps } from '@mui/material'
import { MouseEvent, ReactNode } from 'react'

export interface AuthCustomLoadingButtonProps {
  isLoading?: boolean
  fullWidth?: boolean
  children: ReactNode
  sx?: SxProps
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'outlined' | 'contained'
  startIcon?: ReactNode
  type?: 'button' | 'reset' | 'submit'
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
}
