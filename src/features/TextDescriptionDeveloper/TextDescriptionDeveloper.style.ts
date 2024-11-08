import { Box, styled } from '@mui/material'

export const BoxStyled = styled(Box)(({ theme }) => ({
  width: '100%',
}))

export const BoxDescription = styled(Box)(({ theme }) => ({
  borderLeft: `solid ${theme.palette.secondary.main} 3px`,
  paddingTop: 3,
  paddingLeft: '20px',
  marginTop: '50px',
}))
