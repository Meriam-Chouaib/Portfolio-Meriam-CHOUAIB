import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { useState } from 'react'

export default function useSignup(stepsLength: number) {
  const [activeStep, setActiveStep] = useState(1)
  const [isStepsCompleted, setIsStepsCompleted] = useState(false)
  const [stepsRecord, setStepsRecord] = useState<StepsRecord>({})
  const onNext = () => {
    if (activeStep < stepsLength) {
      setActiveStep(activeStep + 1)
    } else {
      setIsStepsCompleted(true)
    }
  }
  const onPrevious = () => {
    if (activeStep > 1) {
      setIsStepsCompleted(false)
      setActiveStep(activeStep - 1)
    }
  }
  const onIdentity = (newStepsRecord: StepsRecord) => {
    setStepsRecord({ ...stepsRecord, ...newStepsRecord })
    onNext()
  }
  const onFormation = (newStepsRecord: StepsRecord) => {
    setStepsRecord({ ...stepsRecord, ...newStepsRecord })
    onNext()
  }
  const handleFormData = (data: any) => {
    setStepsRecord((prevData) => ({ ...prevData, ...data }))
  }
  return {
    activeStep,
    stepsRecord,
    isStepsCompleted,
    onNext,
    onPrevious,
    onIdentity,
    onFormation,
    handleFormData,
  }
}
