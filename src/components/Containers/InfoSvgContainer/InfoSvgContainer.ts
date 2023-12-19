import { Box, styled } from '@mui/material'

export const InfoSvgContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  svg: { fill: theme.palette.grey[500] },
  ':hover': {
    svg: { fill: theme.palette.primary.main },
  },
}))
