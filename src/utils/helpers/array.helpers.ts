export const findById = <T extends { id: number }>(
  id: number,
  array: Array<T>
) => array.find((element) => element.id === id)

export const addOrRemoveFromArray = <T>(array: T[], itemToAdd: T) => {
  let notFound = true
  const newArray = [...array]
  newArray.forEach((item, i) => {
    if (item === itemToAdd) {
      newArray.splice(i, 1)
      notFound = false
    }
  })
  if (notFound) {
    newArray.push(itemToAdd)
  }
  return newArray
}

export const addOrUpdateArray = (
  array: unknown[],
  value: unknown | null,
  index: number
) => {
  if (!value && index >= 0) {
    array.splice(index, 1)
  } else if (value && index < 0) {
    array.push(value)
  } else {
    array[index] = value
  }
}

export const updateArray = (
  array: unknown[],
  value: unknown | null,
  index: number
) => {
  if (index >= array.length) {
    array.push(value)
    return array
  } else {
    return array.map((item, i) => {
      if (i === index) {
        return value
      } else {
        return item
      }
    })
  }
}

export const generateUpdatedArray = (
  array: unknown[],
  value: unknown | null,
  index: number
) => {
  const newArray = [...array]
  if (!value && index >= 0) {
    newArray.splice(index, 1)
  } else if (value && index < 0) {
    newArray.push(value)
  } else {
    return [...newArray.slice(0, index), value, ...newArray.slice(index + 1)]
  }
  return newArray
}

export const allAreTrue = (arr: boolean[]) => {
  return arr.every((element) => element === true)
}

export const numberToStrings = (numbers: number[]) => {
  return numbers.map((number) => number.toString())
}
