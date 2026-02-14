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
export const BoxHeader = styled(Box)(({ theme }) => ({
  // Effet Glassmorphism
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(10, 10, 18, 0.8)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',

  // Bordure subtile utilisant votre couleur 'divider' du thème sombre
  borderBottom: `1px solid ${theme.palette.mode === 'dark'
    ? 'rgba(126, 215, 193, 0.1)'
    : 'rgba(30, 3, 41, 0.05)'}`,

  position: 'sticky',
  top: 0,
  zIndex: 1100,
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  transition: 'all 0.3s ease-in-out',
}))

export const LinkHeader = styled(Typography)<{ isactive: boolean }>(
  ({ theme, isactive }) => ({
    color: isactive
      ? (theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.main)
      : (theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary),
    fontSize: '15px',
    fontWeight: 600,
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'translateY(-1px)',
    },

    // Point lumineux sous l'élément actif au lieu d'une barre lourde
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '0px',
      left: '50%',
      transform: isactive ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0 0 10px ${theme.palette.primary.main}`,
      transition: 'transform 0.3s ease',
    },
  })
)

export const ButtonContact = styled(Button)(({ theme }) => ({
  // Utilisation de votre dégradé ContainedPrimary du thème sombre
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #7ED7C1 0%, #4BA2AC 100%)'
    : theme.palette.primary.main,
  color: theme.palette.mode === 'dark' ? '#050505' : '#fff',
  borderRadius: '12px',
  padding: '8px 22px',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '14px',
  boxShadow: theme.palette.mode === 'dark' ? '0 4px 14px rgba(126, 215, 193, 0.2)' : 'none',
  transition: 'all 0.3s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 6px 20px rgba(126, 215, 193, 0.4)'
      : `0 4px 12px ${theme.palette.primary.light}`,
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #8FE7D1 0%, #5BB2BC 100%)'
      : theme.palette.primary.dark,
  },

  [theme.breakpoints.down('md')]: {
    display: 'none', // On cache le bouton texte sur mobile pour libérer de l'espace
  },
}))