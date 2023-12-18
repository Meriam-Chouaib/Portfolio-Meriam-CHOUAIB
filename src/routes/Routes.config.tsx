import { RouteIdEnum } from 'config/enums/routes.enum'
import Home from 'pages/Home'
import RouteObject from 'types/interfaces/RouteObject'

const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    children: [],
    element: <Home />,
  },
  {
    path: RouteIdEnum.Login,
    children: [],
    element: <div>Login</div>,
  },
]
export default RoutesConfig
