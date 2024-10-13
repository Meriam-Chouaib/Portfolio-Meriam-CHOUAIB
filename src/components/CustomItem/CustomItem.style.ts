import { Card, styled } from '@mui/material'

export const CustomItemStyled = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: 10,
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}))

export const ImageItem = styled('img')(({ theme }) => ({
  borderRadius: '15px',
  width: '320px',
  height: 'auto',
}))
