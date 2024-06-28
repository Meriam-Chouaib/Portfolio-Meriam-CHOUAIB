import TemporaryDrawer from 'layouts/Header/Drawer/Drawer'
import {
  BoxHeader,
  BoxMenu,
  BoxName,
  ButtonContact,
  ContainerStyled,
  LinkHeader,
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

function Header() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const theme = useAppSelector((state) => state.appReducer.theme)

  const toggleTheme = () => {
    const newTheme =
      theme === AppThemes.LIGHT_MODE
        ? AppThemes.DARK_MODE
        : AppThemes.LIGHT_MODE
    dispatch(changeTheme({ theme: newTheme }))
  }

  return (
    <BoxHeader>
      <ContainerStyled>
        <TemporaryDrawer />

        <BoxName isDark={false}>
          <Name variant='h2'>Chouaib Meriam</Name>
        </BoxName>

        <BoxMenu>
          {itemsDrawer().map((item, index) => (
            <LinkHeader
              to={item.path}
              isactive={item.isActive}
              key={`item-header-${index}`}
            >
              {t(item.txt)}
            </LinkHeader>
          ))}
        </BoxMenu>
        <ToggleButton onChange={toggleTheme} />

        <ButtonTraduction />

        <ButtonContact>{t('header.contact_me')}</ButtonContact>
      </ContainerStyled>
    </BoxHeader>
  )
}

export default Header
