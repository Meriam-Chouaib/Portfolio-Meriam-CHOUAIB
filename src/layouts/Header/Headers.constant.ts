import { RouteIdEnum } from 'config/enums/routes.enum'
import { useLocation } from 'react-router-dom'

// Define the itemsDrawer array
export const items = [
  {
    path: RouteIdEnum.Login,
    txt: 'header.signin',
    isActive: false,
  },
  {
    path: RouteIdEnum.Home,
    txt: 'header.home',
    isActive: false,
  },
  {
    path: RouteIdEnum.About,
    txt: 'header.about',
    isActive: false,
  },
  {
    path: RouteIdEnum.Contact,
    txt: 'header.contact',
    isActive: false,
  },
]

// Determine isActive state based on current pathname
export const itemsDrawer = () => {
  const { pathname } = useLocation()

  return items.map((item) => ({
    ...item,
    isActive: pathname.includes(item.path),
  }))
}
