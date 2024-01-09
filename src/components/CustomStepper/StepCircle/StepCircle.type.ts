export interface StepCircleProps {
  index: number
  isFistStep?: boolean
  isLastStep?: boolean
  isActive?: boolean
  isCompleted?: boolean
  isDisabled?: boolean
  onClick?: (index: number) => void
}
