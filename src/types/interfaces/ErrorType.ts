export default interface ErrorType {
  data: ErrorData
}

export interface ErrorData {
  title?: string
  errno?: string
  message?: string
}
