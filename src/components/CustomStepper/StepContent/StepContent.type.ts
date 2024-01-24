import { ReactNode } from 'react'

export interface StepContentProps {
  children: ReactNode
  disabledNext?: boolean
  disabledNextFn?: () => boolean
  isLoading?: boolean
  onNextStep: () => void

  onPreviousStep?: () => void
  continueButton?: boolean
  hideNextButton?: boolean
}
