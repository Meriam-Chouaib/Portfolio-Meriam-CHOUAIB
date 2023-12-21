export interface AlertObject {
  title?: string
  active: boolean
  message: string
  description?: string
  autoHidden?: number
  type: AlertTypes
  color?: AlertColors
}

export type AlertTypes = 'error' | 'info' | 'success' | 'warning'

export type AlertColors = 'error' | 'info' | 'success' | 'warning'
