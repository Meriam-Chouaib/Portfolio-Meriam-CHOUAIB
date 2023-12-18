import { useRoutes } from 'react-router-dom'
import RoutesConfig from 'routes/Routes.config'

export function Router() {
  return useRoutes(RoutesConfig)
}

export default Router
