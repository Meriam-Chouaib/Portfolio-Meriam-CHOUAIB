import { CONFIG, GlobalVariables } from 'config/constant'
import { isString } from 'utils/validators/input.validators'
import CryptoJS from 'crypto-js'

/**
 * Save a data to local storage by a key
 * @param key, @param data
 */
export const persistData = (key: string, data: unknown) => {
  const dataString: string = isString(data)
    ? (data as string)
    : JSON.stringify(data)
  const encrypted = CryptoJS.AES.encrypt(
    dataString,
    CONFIG.APP_SECRET_KEY
  ).toString()
  localStorage.setItem(key, encrypted)
}

// Extract data from local storage buy a key
export const getPersistData = (key: string, parse?: boolean) => {
  const encryptedString = localStorage.getItem(key) ?? ''
  const decryptedString = CryptoJS.AES.decrypt(
    encryptedString,
    CONFIG.APP_SECRET_KEY
  ).toString(CryptoJS.enc.Utf8)
  return parse
    ? JSON.parse(decryptedString || GlobalVariables.EmptyJsonString)
    : decryptedString
}

// Remove data from the local storage buy a key
export const removePersistData = (key: string) => {
  localStorage.removeItem(key)
}

// Transfer date to a date string
export const dateToString = (date: Date) => {
  return date.toISOString().split('T')[0]
}

// Get a character buy his ASCII code
export const indexToAlphabet = (index: number) => {
  return String.fromCharCode(65 + index)
}

// Replace a long String buy ...
export const toShortUrl = (url: string) => {
  const newUrl = url.replace('https://', '').replace('http://', '')
  return newUrl.length > 25 ? newUrl.substring(0, 25) + '...' : newUrl
}

// Extract the common numbers between two arraysi
export const findCommonElements = (arr1: number[], arr2: number[]) => {
  return arr1.filter((n) => arr2.includes(n))
}
