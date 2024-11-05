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

function Header() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const theme = useAppSelector((state) => state.appReducer.theme)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleTheme = () => {
    const newTheme =
      theme === AppThemes.LIGHT_MODE
        ? AppThemes.DARK_MODE
        : AppThemes.LIGHT_MODE
    dispatch(changeTheme({ theme: newTheme }))
  }
  const scrollToSection = (sectionId: string): void => {
    scroller.scrollTo(sectionId, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
    setActiveSection(sectionId)
  }
  return (
    <BoxHeader>
      <ContainerStyled>
        <TemporaryDrawer />

        <BoxMenu>
          {itemsDrawer().map((item: DrawerItem, index: number) => (
            <MenuItem
              key={`item-header-${index}`}
              onClick={() => scrollToSection(item.id)}
            >
              <LinkHeader isactive={activeSection === item.id}>
                {t(item.txt)}
              </LinkHeader>
            </MenuItem>
          ))}
        </BoxMenu>
        <ToggleButton onChange={toggleTheme} />

        <ButtonTraduction />

        <ButtonContact onClick={() => scrollToSection('contactId')}>
          {t('header.contact_me')}
        </ButtonContact>
      </ContainerStyled>
    </BoxHeader>
  )
}

export default Header
