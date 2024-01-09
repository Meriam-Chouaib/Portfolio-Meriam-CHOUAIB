import { Stack } from '@mui/material'
import { GlobalVariables } from 'config/constant'
import { generateId } from 'utils/helpers/math.helpers'
import {
  ActiveBarStyle,
  ActiveCircleStyle,
  ActiveStepNumberStyle,
  BarStyle,
  CheckedBarStyle,
  CheckedCircleStyle,
  CircleStyle,
  StepNumberStyle,
} from './StepCircle.style'
import { StepCircleProps } from './StepCircle.type'
import CheckedIcon from 'components/Icons/Check'

function StepCircle({
  index,
  isActive,
  isCompleted,
  isFistStep,
  isLastStep,
  onClick,
}: StepCircleProps) {
  const activeStep = () => (
    <>
      {isFistStep ? null : (
        <ActiveBarStyle
          active={index === 2 ? GlobalVariables.TRUE : GlobalVariables.FALSE}
        />
      )}
      <ActiveCircleStyle
        display='flex'
        justifyContent='center'
        alignItems='center'
        onClick={onClickStep}
        isFirst={isFistStep}
        isLast={isLastStep}
      >
        <ActiveStepNumberStyle>{index}</ActiveStepNumberStyle>
      </ActiveCircleStyle>
      {isLastStep ? null : <BarStyle />}
    </>
  )

  const checkedStep = (id: string) => {
    return (
      <>
        {isFistStep ? null : <CheckedBarStyle isLast={isLastStep} />}
        <CheckedCircleStyle
          display='flex'
          justifyContent='center'
          alignItems='center'
          onClick={onClickStep}
          isFirst={isFistStep}
          isLast={isLastStep}
        >
          <CheckedIcon id={id} active={isFistStep || isLastStep} />
        </CheckedCircleStyle>
        {isLastStep ? null : <CheckedBarStyle />}
      </>
    )
  }

  const unfinishedStep = () => (
    <>
      {isFistStep ? null : <BarStyle isLast={isLastStep} />}
      <CircleStyle
        display='flex'
        justifyContent='center'
        alignItems='center'
        onClick={onClickStep}
        isLast={isLastStep}
      >
        <StepNumberStyle
          active={
            isFistStep || isLastStep
              ? GlobalVariables.TRUE
              : GlobalVariables.FALSE
          }
        >
          {index}
        </StepNumberStyle>
      </CircleStyle>
      {isLastStep ? null : <BarStyle />}
    </>
  )

  const generateStep = () => {
    if (isCompleted) {
      return checkedStep(generateId())
    } else if (isActive) {
      return activeStep()
    } else {
      return unfinishedStep()
    }
  }

  const onClickStep = () => {
    if (onClick) {
      onClick(index)
    }
  }
  return (
    <Stack direction='row' alignItems='center'>
      {generateStep()}
    </Stack>
  )
}

export default StepCircle
