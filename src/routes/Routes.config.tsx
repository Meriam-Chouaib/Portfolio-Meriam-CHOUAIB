import { RouteIdEnum } from 'config/enums/routes.enum'
import MainLayout from 'layouts/MainLayout'
import AboutPage from 'pages/AboutPage/AboutPage'
import Home from 'pages/Home/Home'
import LoginPage from 'pages/LoginPage'
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage'
import SignupPage from 'pages/SignupPage/SignupPage'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { Navigate } from 'react-router-dom'
import RouteObject from 'types/interfaces/RouteObject'

const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    children: [
      {
        path: RouteIdEnum.Root,
        element: <Home />,
      },
      {
        path: RouteIdEnum.Home,
        element: <Home />,
      },
      {
        path: RouteIdEnum.About,
        element: <AboutPage />,
      },
      {
        path: RouteIdEnum.Projects,
        element: <ProjectsPage />,
      },
    ],
    element: <MainLayout />,
  },
]
export default RoutesConfig
