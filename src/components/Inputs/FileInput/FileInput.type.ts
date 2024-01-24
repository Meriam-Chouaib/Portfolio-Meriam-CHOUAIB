export interface FileInputProps {
  name: string
  value: File | null
  acceptedTypes: string[]
  fileMaxSize: number
  label?: string
  imageUrl?: string
  multiple?: boolean
  onChange: (file: File | null) => void
}
