import StepContent from 'components/CustomStepper/StepContent/StepContent'
import InfoUserForms from 'features/Auth/InscriptionForm/InfoUserForm/InfoUserForm'
import { INPUTS_INSCRIPTION_FORM } from 'features/Auth/InscriptionForm/InscriptionForm.constants'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import useSignup from 'pages/SignupPage/useSignup'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { formTypes } from 'types/interfaces/FormTypes/GenericForm'
import CardRequest from 'types/models/CardRequest/CardRequest'

function InscriptionForm({
  stepsRecord,
  onNextStep,
  cardRequest,
}: {
  stepsRecord: StepsRecord
  onNextStep: (
    newStepsRecord: StepsRecord,
    newCardRequest?: CardRequest
  ) => void
  cardRequest?: CardRequest
}) {
  const [submitCount, setSubmitCount] = useState(0)
  const { t } = useTranslation()
  // const onSubmit = () => {
  //   setSubmitCount(submitCount + 1)
  //   next()
  // }
  const disableContinueButtonHandler = (): boolean => {
    return false
  }
  const {
    activeStep,
    isStepsCompleted,
    onFormation,
    onIdentity,
    onNext,
    onPrevious,
    handleFormData,

    onSubmit,
    forms,
    checkDependency,
    formsValues,
    onChange,
    setValidForms,
    validForms,
  } = useSignup(9)

  return (
    <StepContent
      continueButton={true}
      onNextStep={() => onSubmit()}
      disabledNextFn={disableContinueButtonHandler}
      isLoading={false}
    >
      <InfoUserForms
        inputs={forms}
        onChange={onChange}
        checkDependency={checkDependency}
        submitCount={submitCount}
        onSubmit={() => onNext()}
      />
    </StepContent>
  )
}

export default InscriptionForm
