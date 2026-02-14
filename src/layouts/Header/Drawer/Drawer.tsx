import * as React from 'react'
import { Drawer, List, ListItem, ListItemIcon, Divider, Typography, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import { scroller } from 'react-scroll'
import {
  ButtonDrawer,
  DrawerContainer,
  StyledListItemButton,
  ListItemTextStyled
} from './Drawer.style'
import { itemsDrawer } from 'layouts/Header/Headers.constant'

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false)
  const { t } = useTranslation()

  const toggleDrawer = (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) return
    setOpen(state)
  }

  const scrollToSection = (id: string) => {
    scroller.scrollTo(id, { duration: 800, delay: 0, smooth: 'easeInOutQuart' })
    setOpen(false)
  }

  return (
    <>
      <ButtonDrawer onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="medium" />
      </ButtonDrawer>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { borderRight: 'none', boxShadow: '20px 0 50px rgba(0,0,0,0.1)' } }}
      >
        <DrawerContainer role="presentation">
          {/* Header du Drawer avec Bouton Fermer */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, px: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <List sx={{ p: 0 }}>
            {itemsDrawer().map((item) => (
              <ListItem key={item.id} disablePadding>
                <StyledListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary', transition: '0.2s' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemTextStyled primary={t(item.txt)} />
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Footer du Drawer (Optionnel) */}
          <Box sx={{ mt: 'auto', pt: 2, textAlign: 'center' }}>
            <Typography variant="caption" color="text.disabled">
              © 2026 Chouaib Meriam
            </Typography>
          </Box>
        </DrawerContainer>
      </Drawer>
    </>
  )
}