
import { styled, IconButton, ListItemText, Box, ListItemButton } from '@mui/material'

// Bouton burger avec effet de hover doux
export const ButtonDrawer = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: theme.palette.primary.main,
  padding: '5px',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(126, 215, 193, 0.1)' : 'rgba(30, 3, 41, 0.05)',
    transform: 'scale(1.05)',
  }
}))

// Conteneur du Drawer avec un padding élégant
export const DrawerContainer = styled(Box)(({ theme }) => ({
  width: 280,
  height: '100%',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3, 2),
  display: 'flex',
  flexDirection: 'column',
}))

// Bouton de liste avec un indicateur actif
export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '12px',
  marginBottom: '8px',
  padding: '12px 16px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(126, 215, 193, 0.08)' : 'rgba(30, 3, 41, 0.04)',
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    }
  },
  '&.active': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(126, 215, 193, 0.15)' : 'rgba(30, 3, 41, 0.08)',
    borderRight: `4px solid ${theme.palette.primary.main}`,
  }
}))

export const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '15px',
    color: theme.palette.text.primary,
  }
}))