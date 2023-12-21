import { RouteIdEnum } from 'config/enums/routes.enum'
import { joinPaths } from 'utils/helpers'
export namespace RouterPaths {
  export namespace RootPaths {
    export const anyPath = '*'
    export const rootPath = '/'
    export const notFoundPath = joinPaths([
      RouteIdEnum.Root,
      RouteIdEnum.NotFound,
    ])
  }

  export namespace AuthPaths {
    export const loginPath = joinPaths([
      RouteIdEnum.Root,
      RouteIdEnum.Auth,
      RouteIdEnum.Login,
    ])
    export const forgetPasswordPath = joinPaths([
      RouteIdEnum.Root,
      RouteIdEnum.Auth,
      RouteIdEnum.ForgetPassword,
    ])
  }
}
