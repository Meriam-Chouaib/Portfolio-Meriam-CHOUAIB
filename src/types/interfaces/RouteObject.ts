import { RouteIdEnum } from 'config/enums/routes.enum'
import { ReactElement } from 'react'

export default interface RouteObject {
  path: RouteIdEnum
  element?: ReactElement
  children?: RouteObject[]
}
