import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  FormControl,
  Typography,
  styled,
} from '@mui/material'
import { GlobalVariables } from 'config/constant'
import { GlobalFonts } from 'config/constant/fonts.config'
import { ColorsConfig } from 'config/constant/colors.config'
import { pad } from 'lodash'
export const BoxMenu = styled(Box)(({ theme }) => ({
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
export const BoxHeader = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(15, 23, 42, 0.8)', // Semi-transparent slate
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  height: '80px', // Standard height
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
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
export const ContainerStyled = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))


export const LinkHeader = styled(Typography)(
  ({ theme }) =>
    ({ isactive }: { isactive: boolean }) => ({
      color: isactive
        ? theme.palette.secondary.main // Cyan for active
        : '#f8fafc',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '600',
      padding: '0px 15px',
      transition: 'color 0.3s ease',
      cursor: 'pointer', // Ensure cursor pointer
      '&:hover': {
        color: theme.palette.primary.main, // Royal Blue hover
      },
    }),
)
export const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
  },
}))
export const BoxName = styled(Box)(
  ({ theme }) =>
    ({ isDark }: { isDark: boolean }) => ({
      color: isDark
        ? theme.palette.secondary.light
        : theme.palette.secondary.dark,
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '600',
      padding: '0px 10px',
      width: '210px',
      [theme.breakpoints.down('md')]: {
        width: 'auto',
      },
    }),
)
export const ButtonContact = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontFamily: 'inherit',
  fontWeight: 'bold',
  borderRadius: '8px',
  padding: '8px 20px',
  textTransform: 'none',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  border: 'none',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '6px 16px',
    fontSize: '14px',
  },
}))

export const TraductionForm = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.down(500)]: {
    //display: 'none',
  },
}))
export const MenuItem = styled('span')(({ theme }) => ({
  cursor: 'pointer',
  [theme.breakpoints.down(500)]: {
    display: 'none',
  },
}))
