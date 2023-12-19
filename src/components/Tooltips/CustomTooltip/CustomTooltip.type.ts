import { ReactElement } from 'react'

export type CustomTooltipProps = {
  title: string | ReactElement
  subTitle?: string
  children?: ReactElement
  placement?: PLacement
  arrow?: boolean
  isError?: boolean
  open?: boolean
  size?: 'small' | 'medium'
}

type PLacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top'
