import { GlobalVariables } from 'config/constant'

/**
 * check is valid email
 * @param email
 * @returns
 */
export const isEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

/**
 * This regular expression match can be used for validating strong password.
 * It expects at least 1 small-case letter, 1 Capital letter, 1 digit, 1 special character
 * and the length should be between 6-unlimited characters.
 * The sequence of the characters is not important.
 * This expression follows the above 4 norms specified by microsoft for a strong password.
 * @param password
 * @returns
 */
export const isPassword = (password: string): boolean => {
  const PASSWORD = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/
  return PASSWORD.test(password)
}

// Check if a value type is a string
export const isString = (word: unknown) => {
  return typeof word === GlobalVariables.STRING || word instanceof String
}

export const isValidDate = (date: Date) => {
  return date instanceof Date && !isNaN(date.getTime())
}
