import { ReactNode } from 'react'

export interface CustomStepperProps {
  activeStep: number
  isCompleted: boolean
  maxSteps: number
  children: ReactNode
  showSteps?: boolean
}
