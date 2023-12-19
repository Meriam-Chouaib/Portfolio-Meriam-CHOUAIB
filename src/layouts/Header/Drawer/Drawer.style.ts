import { styled, Button } from '@mui/material'

export const ButtonDrawer = styled(Button)(({ theme }) => ({
  display: 'none',
  padding: '2px 7px',
  minWidth: '40px',
  backgroundColor: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  ':hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}))
