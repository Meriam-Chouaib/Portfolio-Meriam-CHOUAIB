import { styled } from '@mui/material'
import InfoIcon from 'assets/icons/info.svg?react'

export const InfoIconStyle = styled(InfoIcon)(({ theme }) => ({
  fill: theme.palette.grey[400],
}))
