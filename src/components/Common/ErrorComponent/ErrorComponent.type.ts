import { ErrorData } from 'types/interfaces/ErrorType'

export interface ErrorComponentProps {
  error?: ErrorData
  isRefreshable?: boolean
  onRetry?: () => void
}
