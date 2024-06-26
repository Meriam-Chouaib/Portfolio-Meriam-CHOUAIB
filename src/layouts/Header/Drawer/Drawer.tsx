import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { BoxDrawer } from 'layouts/Header/Header.style'
import {
  ButtonDrawer,
  IconDrawer,
  LinkStyled,
  ListItemTextStyled,
} from 'layouts/Header/Drawer/Drawer.style'
import { itemsDrawer } from 'layouts/Header/Headers.constant'
import { useTranslation } from 'react-i18next'
import drawerIcon from 'assets/icons/icon-drawer.png'

export default function TemporaryDrawer() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const { t } = useTranslation()

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, ['left']: open })
      setOpenDrawer(open)
    }

  const list = () => (
    <BoxDrawer
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {itemsDrawer().map((item, index) => (
          <LinkStyled to={item.path} key={`item-header-${index}`}>
            <ListItem
              key={item.txt}
              disablePadding
              sx={{ margin: '1rem 0rem' }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemTextStyled primary={t(item.txt)} />
              </ListItemButton>
            </ListItem>
          </LinkStyled>
        ))}
      </List>
    </BoxDrawer>
  )

  return (
    <>
      {
        <React.Fragment key={'left'}>
          <ButtonDrawer onClick={toggleDrawer(true)} variant='outlined'>
            <IconDrawer src={drawerIcon} />
          </ButtonDrawer>
          <Drawer
            anchor={'left'}
            open={openDrawer}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      }
    </>
  )
}
