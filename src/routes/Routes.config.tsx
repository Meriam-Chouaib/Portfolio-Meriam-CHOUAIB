import { RouteIdEnum } from 'config/enums/routes.enum'
import MainLayout from 'layouts/MainLayout'
import Home from 'pages/Home'
import RouteObject from 'types/interfaces/RouteObject'

const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    children: [
      {
        path: RouteIdEnum.Home,
        element: <Home />,
      },
      {
        path: RouteIdEnum.Login,

        element: <div>Login</div>,
      },
    ],
    element: <MainLayout />,
  },
]
export default RoutesConfig
