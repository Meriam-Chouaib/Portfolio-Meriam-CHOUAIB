import lodash from 'lodash'

export const isObjectExist = (object: unknown) => {
  return typeof object !== 'undefined'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objectIsEmpty = (object: any) => {
  return Object.keys(object).length === 0
}

// eslint-disable-next-line
export const toCamelCase = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map((item) => toCamelCase(item))
  }

  if (data !== null && typeof data === 'object') {
    // eslint-disable-next-line
    const camelData: any = {}

    lodash.forEach(data, (value, key) => {
      camelData[lodash.camelCase(key)] = toCamelCase(value)
    })

    return camelData
  }

  return data
}

// eslint-disable-next-line
export const toSnakeCase = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map((item) => toSnakeCase(item))
  }

  if (data !== null && typeof data === 'object') {
    // eslint-disable-next-line
    const snakeData: any = {}

    lodash.forEach(data, (value, key) => {
      const snakeKey = lodash.snakeCase(key)
      snakeData[snakeKey] = toSnakeCase(value)
    })

    return snakeData
  }

  return data
}
