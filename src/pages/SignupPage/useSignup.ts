import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { SetStateAction, useState } from 'react'
import CardRequest from 'types/models/CardRequest/CardRequest'

export default function useRequestNewCard(stepsLength: number) {
  const [activeStep, setActiveStep] = useState(1)
  const [isStepsCompleted, setIsStepsCompleted] = useState(false)
  const [submitCount, setSubmitCount] = useState(0)
  const [stepsRecord, setStepsRecord] = useState<StepsRecord>({})
  const [cardRequest, setCardRequest] = useState<CardRequest>()

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
  const onIdentity = (
    newStepsRecord: StepsRecord,
    newCardRequest?: CardRequest
  ) => {
    setStepsRecord({ ...stepsRecord, ...newStepsRecord })
    setCardRequest({ ...cardRequest, ...newCardRequest })
    setActiveStep(activeStep + 1)

    onNext()
  }
  const onFormation = (newStepsRecord: StepsRecord) => {
    setStepsRecord({ ...stepsRecord, ...newStepsRecord })
    onNext()
  }
  const handleFormData = (data: any) => {
    setStepsRecord((prevData) => ({ ...prevData, ...data }))
  }
  const onSubmit = (
    infos: { isValid: boolean; values: unknown },
    onChange: (
      index: number,
      value: unknown,
      arrayIndex?: number | undefined
    ) => void,
    setValidForms: (value: SetStateAction<boolean>) => void
  ) => {
    if (infos.isValid) {
      onChange(2, infos.values)
    }
    setValidForms(infos.isValid)

    setActiveStep(activeStep + 1)
    console.log('🚀 ~ useSignup ~ activeStep:', activeStep)

    setSubmitCount(submitCount + 1)
    onNext()
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
    onSubmit,

    cardRequest,
    submitCount,
  }
}
