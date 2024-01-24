export interface FilesFormProps {
  inputName: string
  files: File[]
  labels?: string[]
  filesTypes?: string[]
  filesMaxSize?: number
  message: string
  description?: string
  maxFilesCount?: number
  hideFileDescription?: boolean
  onChange: (file: File | null, arrayIndex?: number) => void
}
