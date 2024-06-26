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

  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
export const BoxHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: '2px solid',
  borderRadius: '40px',

  height: '4rem',
  display: 'flex',
  alignItems: 'center',

  width: '100%',
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
  '&.MuiContainer-root': {
    paddingRight: '6px',
    maxWidth: '10 0%',
  },
}))

export const LinkHeader = styled(Link)(
  ({ theme }) =>
    ({ isactive }: { isactive: boolean }) => ({
      color: isactive
        ? theme.palette.secondary.light
        : theme.palette.primary.contrastText,
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      padding: '0px 10px',
      fontFamily: GlobalFonts.FONT_MONOSPACE,
    })
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
    })
)
export const ButtonContact = styled(Button)(({ theme }) => ({
  backgroundColor: ColorsConfig.primary.main,
  fontFamily: GlobalFonts.FONT_MONOSPACE,
  width: '150px',
  borderRadius: '30px',
  padding: '15px',
  color: ColorsConfig.grey[200],
  ':hover': {
    backgroundColor: ColorsConfig.primary.contrastText,
  },
  [theme.breakpoints.down('md')]: {
    width: '100px',
    fontSize: '14px',
    padding: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '9px',
  },

  [theme.breakpoints.down(426)]: {
    padding: '6px',
  },
  [theme.breakpoints.down(426)]: {
    padding: '4px',
  },
  [theme.breakpoints.down(387)]: {
    padding: '2px',
  },
}))

export const TraductionForm = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.down(500)]: {
    display: 'none',
  },
}))
