import { DocumentsType } from 'types/models/Inscription/Supporting.type'
import { GroupedByClients } from 'types/models/Users/Client/Client'

export const arrayIsEmpty = (a: string[]) => {
  return a.length === 0
}

export const convertArrayObjectToArrayFile = (a: DocumentsType[] | null) => {
  return a ? a.map((document) => document.file) : null
}

export const convertArrayObjectToArrayString = (a: DocumentsType[]) => {
  return a.map((document) => {
    if (document.path) {
      return document.path
    }
  })
}

export const convertFilesToDocuments = (files: File[]): DocumentsType[] => {
  return files.map((file) => ({
    file: file,
    path: undefined,
  }))
}

export const generateArray = (lengthArray: number) => {
  const array: number[] = [0]
  for (let i = 1; i < lengthArray; i++) {
    array.push(i)
  }
  return array
}

export const fillArray = (length: number, fill: unknown) => {
  if (length < 1) {
    return Array(1).fill(fill)
  }

  return Array(length).fill(fill)
}

export const truncateArray = (array: unknown[], length: number) => {
  return array?.slice(0, length)
}

export const transformArrayObjectToArrayAlphabet = (
  myClients: GroupedByClients[]
) => {
  return myClients.map((client) => client.group)
}

export const transformArray2DToArrayClient = (
  myClients: GroupedByClients[]
) => {
  return myClients.flatMap((element) => element.data)
}

export const transformArray2DToArrayId = (rows: GroupedByClients[]) => {
  return rows.flatMap((row) => row.data.map((client) => client.id))
}

export const arrayToString = (
  array: number[] | string[],
  separator: string
) => {
  return array.join(separator)
}

export const compareTwoArray = (array1: number[], array2: number[]) => {
  const sortedArray1 = array1.slice().sort()
  const sortedArray2 = array2.slice().sort()
  return JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2)
}

export const compareArrayOfObjectsByKey = <
  T extends { [key: string]: unknown }
>(
  array1: T[],
  array2: T[] | undefined,
  key: keyof T
): boolean => {
  if (!array2) return false

  const sortedArray1 = array1.slice().sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })

  const sortedArray2 = array2.slice().sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
  return JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2)
}

export const sumArray = (array1: number[]) => {
  let sum = 0
  array1.forEach((num) => {
    sum += num
  })
  return sum
}

export const getMax = (array: number[]) => {
  return Math.max(...array)
}

export const getMaxValueInMatrix = (matrix: number[][]) => {
  let maxValue = matrix[0][0]

  for (const row of matrix) {
    for (const element of row) {
      if (element > maxValue) {
        maxValue = element
      }
    }
  }

  return maxValue
}
