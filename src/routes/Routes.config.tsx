import { RouteIdEnum } from 'config/enums/routes.enum'
import RouteObject from 'types/interfaces/RouteObject'

const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    children: [],
    element: <div>Home</div>,
  },
  {
    path: RouteIdEnum.Login,
    children: [],
    element: <div>Login</div>,
  },
]
export default RoutesConfig
