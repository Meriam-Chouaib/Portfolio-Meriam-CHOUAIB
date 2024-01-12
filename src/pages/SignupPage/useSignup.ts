import { INPUTS_INSCRIPTION_FORM } from 'features/Auth/InscriptionForm/InscriptionForm.constants'
import useFormGroup from 'hooks/useFormGroup'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { useState } from 'react'
import CardRequest from 'types/models/CardRequest/CardRequest'

export default function useSignup(stepsLength: number) {
  const [activeStep, setActiveStep] = useState(1)
  const [isStepsCompleted, setIsStepsCompleted] = useState(false)
  const [stepsRecord, setStepsRecord] = useState<StepsRecord>({})
  const [submitCount, setSubmitCount] = useState(0)
  const [cardRequest, setCardRequest] = useState<CardRequest>()

  const {
    forms,
    onChange,
    checkDependency,
    formsValues,
    validForms,
    setValidForms,
  } = useFormGroup(INPUTS_INSCRIPTION_FORM(stepsRecord))
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

    onNext()
  }
  const onFormation = (newStepsRecord: StepsRecord) => {
    setStepsRecord({ ...stepsRecord, ...newStepsRecord })
    onNext()
  }
  const handleFormData = (data: any) => {
    setStepsRecord((prevData) => ({ ...prevData, ...data }))
  }
  const onSubmit = () => {
    setSubmitCount(submitCount + 1)
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
    forms,
    onChange,
    checkDependency,
    formsValues,
    validForms,
    setValidForms,
    cardRequest,
    submitCount,
  }
}
