export const validateFileType = (file: File, availableTypes: string[]) => {
  const fileType = file.type.split('/')[1]
  return availableTypes.includes(`.${fileType}`)
}

export const validateFileSize = (file: File, maxSize: number) => {
  return file.size <= maxSize
}

export const validateFileSizeAndType = (
  file: File,
  maxSize: number,
  availableTypes: string[]
) => {
  return (
    validateFileType(file, availableTypes) && validateFileSize(file, maxSize)
  )
}
