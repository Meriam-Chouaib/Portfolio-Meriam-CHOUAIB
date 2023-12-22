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
      path: RouteIdEnum.About,
      txt: 'header.about',
      isActive: pathname.indexOf(RouteIdEnum.About) !== -1,
    },
    {
      path: RouteIdEnum.Contact,
      txt: 'header.contact',
      isActive: pathname.indexOf(RouteIdEnum.Contact) !== -1,
    },
  ]
  return (
    <BoxHeader>
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <TemporaryDrawer />
        <BoxMenu>
          {items.map((item, index) => (
            <LinkHeader
              to={item.path}
              isactive={item.isActive}
              key={`item-header-${index}`}
            >
              {t(item.txt)}
            </LinkHeader>
          ))}
        </BoxMenu>
        {/* <ButtonTraduction /> */}
      </Container>
    </BoxHeader>
  )
}

export default Header
