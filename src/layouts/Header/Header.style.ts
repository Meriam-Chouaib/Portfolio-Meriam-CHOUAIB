import { Link } from 'react-router-dom'
import { Box, styled } from '@mui/material'
export const BoxMenu = styled(Box)(({ theme }) => ({
  width: '100%',

  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
export const BoxHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
}))
export const BoxDrawer = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}))
export const LinkBox = styled(Box)({
  backgroundColor: 'black',
  color: 'white',
  width: '100%',
})
export const LinkHeader = styled(Link)(
  ({ theme }) =>
    ({ isactive }: { isactive: boolean }) => ({
      color: isactive
        ? theme.palette.secondary.light
        : theme.palette.secondary.dark,
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '600',
      padding: '0px 10px',
    })
)
