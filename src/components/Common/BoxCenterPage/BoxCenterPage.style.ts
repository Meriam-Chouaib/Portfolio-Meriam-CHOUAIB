import { Box, styled } from '@mui/material'

export const BoxCenterPageStyled = styled(Box)(({ theme }) => ({
  height: 'calc(100vh - (40px + 64px))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}))
