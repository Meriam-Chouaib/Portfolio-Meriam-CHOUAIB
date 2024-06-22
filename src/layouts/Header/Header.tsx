import { LinkHeader } from 'layouts/Footer/Footer.style'
import TemporaryDrawer from 'layouts/Header/Drawer/Drawer'
import { BoxHeader, BoxMenu } from 'layouts/Header/Header.style'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'
import { itemsDrawer } from 'layouts/Header/Headers.constant' // Adjust the import path as necessary

function Header() {
  const { t } = useTranslation()

  return (
    <BoxHeader>
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <TemporaryDrawer />
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
        {/* <ButtonTraduction /> */}
      </Container>
    </BoxHeader>
  )
}

export default Header
