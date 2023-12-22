import InfoIcon from 'assets/icons/info.svg?react'
import { styled } from '@mui/material'

export const InfoIconStyle = styled(InfoIcon)(({ theme }) => ({
  fill: theme.palette.grey[400],
}))
