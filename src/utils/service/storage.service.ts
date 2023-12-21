import { GlobalVariables } from 'config/constant'
import { STORAGE_KEYS } from 'config/constant/storage.config'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import User from 'types/models/Users/User'
import { getPersistData, persistData, removePersistData } from 'utils/helpers'

// return the user from local storage if exist
export const getUserFromLocalStorage = (): User | null => {
  try {
    const user = getPersistData(STORAGE_KEYS.USER, true) as User
    return user ?? null
  } catch (error) {
    clearLocalStorage()
    return null
  }
}

// return the token from local storage if exist
export const getTokenFromLocalStorage = (): string | null => {
  try {
    const token = getPersistData(STORAGE_KEYS.TOKEN, false) as string
    return token ?? null
  } catch (error) {
    clearLocalStorage()
    return null
  }
}

// return the refresh token from local storage if exist
export const getRefreshTokenFromLocalStorage = (): string | null => {
  try {
    const refreshToken = getPersistData(
      STORAGE_KEYS.REFRESH_TOKEN,
      false
    ) as string
    return refreshToken ?? null
  } catch (error) {
    clearLocalStorage()
    return null
  }
}

// return the token from local storage if exist
export const getIsConnectedAsExpertFromLocalStorage = (): boolean => {
  try {
    const isExpert = getPersistData(STORAGE_KEYS.IS_EXPERT, false) as string
    return isExpert === GlobalVariables.TRUE
  } catch (error) {
    return false
  }
}

export const getRememberMeFromLocalStorage = () => {
  return (
    getPersistData(STORAGE_KEYS.REMEMBER_ME, false) === GlobalVariables.TRUE
  )
}

// save a user in the local storage
export const saveIsConnectedAsExpertToLocalStorage = (isExpert: boolean) => {
  persistData(STORAGE_KEYS.IS_EXPERT, isExpert)
}

// save a user in the local storage
export const saveUserToLocalStorage = (coach: User) => {
  persistData(STORAGE_KEYS.USER, coach)
}

// save a token in the local storage
export const saveTokenToLocalStorage = (token: string) => {
  persistData(STORAGE_KEYS.TOKEN, token)
}

// save a refresh token in the local storage
export const saveRefreshTokenToLocalStorage = (refreshToken: string) => {
  persistData(STORAGE_KEYS.REFRESH_TOKEN, refreshToken)
}

// remove the user json object from local storage
export const removeUserFromLocalStorage = () => {
  removePersistData(STORAGE_KEYS.TOKEN)
}

// remove the use token from local storage
export const removeTokenFromLocalStorage = () => {
  removePersistData(STORAGE_KEYS.TOKEN)
}

// remove the use refresh token from local storage
export const removeRefreshTokenFromLocalStorage = () => {
  removePersistData(STORAGE_KEYS.REFRESH_TOKEN)
}

// decode a JWT token
export const parseJwt = (token: string) => {
  return jwt_decode<JwtPayload>(token)
}

export const clearAuthFromLocalStorage = () => {
  removeUserFromLocalStorage()
  removeTokenFromLocalStorage()
  removeRefreshTokenFromLocalStorage()
  removePersistData(STORAGE_KEYS.IS_EXPERT)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}
