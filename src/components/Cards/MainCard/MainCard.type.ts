import { ReactNode } from 'react'
import { ErrorData } from 'types/interfaces/ErrorType'

export interface MainCardProps {
  children: ReactNode
  error?: ErrorData
}
