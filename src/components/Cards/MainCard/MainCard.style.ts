import { Card, styled } from '@mui/material'

export const RootStyle = styled(Card)(({ theme }) => ({
  minHeight: 300,
  margin: 'auto',
  padding: 40,
  backgroundColor: theme.palette.grey[50],
  bowShadow: '20px 20px 10px rgba(0, 0, 0, 0.9)',
  [theme.breakpoints.down(1160)]: {
    marginLeft: 20,
    marginRight: 20,
  },
  [theme.breakpoints.down('md')]: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
}))
