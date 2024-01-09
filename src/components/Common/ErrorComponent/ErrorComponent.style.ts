import { Stack, styled } from '@mui/material'
import InfoIcon from 'assets/icons/info.svg?react'

export const RootStyle = styled(Stack)({
  width: '100%',
  minHeight: 300,
})

export const InfoIconStyle = styled(InfoIcon)(({ theme }) => ({
  width: '50px',
  height: '50px',
  g: {
    rect: {
      fill: theme.palette.error.main,
    },
  },
}))
