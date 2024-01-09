export const getMaxValue = (a: number, b: number) => {
  if (b > a) {
    return b
  } else {
    return a
  }
}

export const generateRandomNumber = (min = 100, max = 100000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateId = () => {
  return generateRandomNumber().toString()
}
