import StepContent from 'components/CustomStepper/StepContent/StepContent'
import InfoUserForms from 'features/Auth/InscriptionForm/InfoUserForm/InfoUserForm'
import { useInscriptionForm } from 'features/Auth/InscriptionForm/useInscriptionForm'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { useState } from 'react'
import CardRequest from 'types/models/CardRequest/CardRequest'
// ANCHOR DONE
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

  const {
    handleSubmit,
    disableNextFn,
    forms,
    onChange,
    checkDependency,
    onSubmit,
    formsValues,
  } = useInscriptionForm(stepsRecord, onNextStep, cardRequest)
  console.log('🚀 ~ formsValues:', formsValues)

  return (
    <StepContent onNextStep={handleSubmit} disabledNextFn={disableNextFn}>
      <InfoUserForms
        inputs={forms}
        onChange={onChange}
        checkDependency={checkDependency}
        submitCount={submitCount}
        onSubmit={onSubmit}
      />
    </StepContent>
  )
}

export default InscriptionForm
