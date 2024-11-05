import { Box, styled } from '@mui/material'

export const ProjectsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '34px',
  padding: '16px',
  backgroundColor: theme.palette.secondary.contrastText,

  borderRadius: '0px 50px 0px 50px',
  margin: '20px 0px',
}))
