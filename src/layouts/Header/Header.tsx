import TemporaryDrawer from 'layouts/Header/Drawer/Drawer'
import {
  BoxHeader,
  BoxMenu,
  BoxName,
  ButtonContact,
  ContainerStyled,
  LinkHeader,
  MenuItem,
  Name,
} from 'layouts/Header/Header.style'
import { useTranslation } from 'react-i18next'
import { itemsDrawer } from 'layouts/Header/Headers.constant' // Adjust the import path as necessary
import { AppThemes } from 'config/enums/theme.enums'
import { useDispatch } from 'react-redux'
import { changeTheme } from 'redux/slices/app/appSlice'
import { useAppSelector } from 'redux/hooks'
import ButtonTraduction from 'layouts/Header/ButtonTraduction/ButtonTraduction'
import ToggleButton from 'components/ToggleButton/ToggleButton'
import { DrawerItem } from 'layouts/Header/Header.type'
import { scroller } from 'react-scroll'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'

function Header() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const theme = useAppSelector((state) => state.appReducer.theme)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const scrollToSection = (sectionId: string): void => {
    scroller.scrollTo(sectionId, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
    setActiveSection(sectionId)
  }
  // Logic pour changer le thème (déjà correct dans votre code)
  const toggleTheme = () => {
    const newTheme = theme === AppThemes.LIGHT_MODE ? AppThemes.DARK_MODE : AppThemes.LIGHT_MODE
    dispatch(changeTheme({ theme: newTheme }))
  }

  return (
    <BoxHeader>
      <ContainerStyled maxWidth="xl">
        {/* LOGO / BURGER MOBILE */}
        <Box sx={{
          display: {
            xs: 'flex',   // Mobile
            sm: 'flex',   // Tablette
            md: 'none',   // Laptop (cache à partir d'ici)
            lg: 'none',   // Large écran
            xl: 'none'    // Très large écran
          }, alignItems: 'center'
        }}>
          <TemporaryDrawer />
          <Typography variant="h6" sx={{ fontWeight: 800, ml: { xs: 1, md: 0 }, color: 'primary.main', display: { xs: 'block', md: 'none' } }}>
            MC
          </Typography>
        </Box>

        {/* NAVIGATION DESKTOP */}
        <BoxMenu>
          {itemsDrawer().map((item, index) => (
            <MenuItem key={index} onClick={() => scrollToSection(item.id)}>
              <LinkHeader isactive={activeSection === item.id}>
                {t(item.txt)}
              </LinkHeader>
            </MenuItem>
          ))}
        </BoxMenu>

        {/* ACTIONS DROITE */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, md: 2 } }}>
          <ToggleButton onChange={toggleTheme} />
          <ButtonTraduction />

          <ButtonContact onClick={() => scrollToSection('contactId')}>
            {t('header.contact_me')}
          </ButtonContact>
        </Box>
      </ContainerStyled>
    </BoxHeader>
  )
} export default Header