import LinkObject from 'types/interfaces/LinkObject'

export interface AlertObject {
  title?: string
  active: boolean
  message: string
  description?: string
  autoHidden?: number
  type: AlertTypes
  color?: AlertColors
  link?: LinkObject
  preLinkMessage?: string
  postLinkMessage?: string
  backgroundColor?: string
  messageColor?: string
  iconColor?: string
}

export type AlertTypes = 'error' | 'info' | 'success' | 'warning'

export type AlertColors = 'error' | 'info' | 'success' | 'warning'
