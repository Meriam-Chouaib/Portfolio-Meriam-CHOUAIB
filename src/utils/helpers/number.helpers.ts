import { parsePhoneNumber } from 'libphonenumber-js'

export const generateRandomNumber = (min = 100000, max = 999999): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const shortenNumber = (num: number, decimals = 1): string => {
  // TODO: add translation to this abbreviations
  const abbreviations = ['K', 'M', 'B', 'T']
  if (num < 1000) {
    return num.toString()
  }
  const exponent = Math.floor(Math.log10(num) / 3)
  const abbreviation = abbreviations[exponent - 1]
  const converted = num / Math.pow(1000, exponent)
  const rounded = converted.toFixed(decimals)
  return `${rounded}${abbreviation}`
}

export const convertNumberToString = (num: number | string): string => {
  const str = num.toString()
  const parts = str.split('.')
  const integerPart = parts[0]
  const decimalPart = parts.length > 1 ? ',' + parts[1].substring(0, 2) : ',00'
  return integerPart + decimalPart
}

export const priceToString = (price: number, currency: string): string => {
  if (!price) {
    return `00,00 ${currency}`
  }
  const priceWithComma = shortenNumber(price)
  return `${convertNumberToString(priceWithComma)} ${currency}`
}

export const ratingPercentage = (num: number) => {
  const percentage = (num / 5) * 100
  if (percentage > 100) {
    return 100
  } else {
    return percentage
  }
}

export const getDecimalPart = (num: number) => {
  const decimalPart = num.toString().split('.')[1]
  return decimalPart ? decimalPart.split('', 2) : '0'
}

export const getWholeNumberPart = (num: number) => {
  return Math.trunc(num)
}

export const transformkilometresToMetres = (num: number) => {
  return num * 1000
}

/**
 * Adds spaces as a thousands separator to a number.
 * @param number - The number to format.
 * @returns The formatted number with spaces added as a thousands separator.
 */
export const formatNumber = (number: number | string): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/(\d{2})(?=\d{2})/g, '$1 ')
}

export const gramsToKilograms = (grams: number) => {
  return grams / 1000
}

export const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) return 0
  return (value / total) * 100
}

export const roundToNearestThousand = (number: number) => {
  if (typeof number !== 'number' || isNaN(number)) {
    return 0
  }
  const numDigits = Math.floor(Math.log10(Math.abs(number))) + 1
  return (
    Math.ceil(number / Math.pow(10, numDigits - 1)) *
    Math.pow(10, numDigits - 1)
  )
}

export const abbreviationNumber = (num: number): string => {
  // TODO: add translation to this abbreviations
  const abbreviations = ['K', 'M', 'B', 'T']
  if (num < 1000) {
    return num.toString()
  }
  const exponent = Math.floor(Math.log10(num) / 3)
  const abbreviation = abbreviations[exponent - 1]
  const converted = num / Math.pow(1000, exponent)
  return `${converted}${abbreviation}`
}

export const getAbbreviationMax = (max: number) => {
  return `0${abbreviationNumber(max)[abbreviationNumber(max).length - 1]}`
}

export const stringToNumber = (string: string) => {
  return +string.replace(/\D/g, '')
}

export const formatInternationalPhoneNumber = (phone: string) => {
  try {
    return parsePhoneNumber(phone).formatInternational()
  } catch (e) {
    return phone
  }
}
