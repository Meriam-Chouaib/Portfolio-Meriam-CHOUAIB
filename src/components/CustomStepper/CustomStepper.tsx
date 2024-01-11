import { Stack, Box } from '@mui/material'
import {
  RootStyle,
  StepsStyle,
} from 'components/CustomStepper/CustomStepper.style'
import { CustomStepperProps } from 'components/CustomStepper/CustomStepper.type'
import StepCircle from 'components/CustomStepper/StepCircle/StepCircle'

function CustomStepper({
  children,
  activeStep,
  isCompleted,
  maxSteps,
  showSteps,
}: CustomStepperProps) {
  const renderActiveSteps = () => {
    const steps = []
    for (let i = 1; i <= maxSteps; i++) {
      steps.push(
        <StepCircle
          key={i}
          index={i}
          isActive={i === activeStep}
          isCompleted={isCompleted ? isCompleted : i < activeStep}
          isFistStep={i === 1}
          isLastStep={i === maxSteps}
        />
      )
    }
    return steps
  }
  return (
    <RootStyle paddingTop={6} paddingBottom={6}>
      <Stack alignItems='center' spacing={4.5}>
        {showSteps && <StepsStyle>{renderActiveSteps()}</StepsStyle>}
        <Box width='100%'>{children}</Box>
      </Stack>
    </RootStyle>
  )
}

export default CustomStepper
