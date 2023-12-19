import { RouteIdEnum } from 'config/enums/routes.enum'
import { LinkHeader } from 'layouts/Footer/Footer.style'
import TemporaryDrawer from 'layouts/Header/Drawer/Drawer'
import { BoxHeader, BoxMenu } from 'layouts/Header/Header.style'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Container } from '@mui/material'

function Header() {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const items = [
    {
      path: RouteIdEnum.Login,
      txt: 'header.signin',
      isActive: pathname.indexOf(RouteIdEnum.Login) !== -1,
    },
    {
      path: RouteIdEnum.Home,
      txt: 'header.home',
      isActive: pathname.indexOf(RouteIdEnum.Home) !== -1,
    },
    {
      path: RouteIdEnum.about,
      txt: 'header.about',
      isActive: pathname.indexOf(RouteIdEnum.about) !== -1,
    },
    {
      path: RouteIdEnum.contact,
      txt: 'header.contact',
      isActive: pathname.indexOf(RouteIdEnum.contact) !== -1,
    },
  ]
  return (
    <BoxHeader>
      <Container>
        <TemporaryDrawer />
        <BoxMenu>
          {items.map((item) => (
            <LinkHeader to={item.path} isactive={item.isActive}>
              {t(item.txt)}
            </LinkHeader>
          ))}
        </BoxMenu>
      </Container>
    </BoxHeader>
  )
}

export default Header
