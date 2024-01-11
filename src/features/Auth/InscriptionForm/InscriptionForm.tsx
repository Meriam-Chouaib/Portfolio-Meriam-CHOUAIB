import StepContent from 'components/CustomStepper/StepContent/StepContent'
import InfoUserForm from 'features/Auth/InscriptionForm/InfoUserForm/InfoUserForm'
import { INPUTS_INSCRIPTION_FORM } from 'features/Auth/InscriptionForm/InscriptionForm.constants'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { formTypes } from 'types/interfaces/FormTypes/GenericForm'
import { InputTypes } from 'types/interfaces/FormTypes/InputObject'

function InscriptionForm() {
  const [submitCount, setSubmitCount] = useState(0)
  const { t } = useTranslation()
  const onSubmit = () => {
    setSubmitCount(submitCount + 1)
  }
  const disableContinueButtonHandler = (): boolean => {
    return false
  }

  return (
    <StepContent
      continueButton={true}
      onNextStep={onSubmit}
      disabledNextFn={disableContinueButtonHandler}
      isLoading={false}
    >
      <InfoUserForm
        forms={[
          {
            inputs: INPUTS_INSCRIPTION_FORM,
            id: 1,
            type: formTypes.INPUTS,
            name: t('signup.name_form'),
            order: 1,
            text: t('signup.name_form'),
            value: 'Sample Text',
            isRequired: true,
          },
        ]}
        oldStepsRecord={undefined}
        onNextStep={function (newStepsRecord: StepsRecord): void {
          throw new Error('Function not implemented.')
        }}
        onPreviousStep={function (): void {
          throw new Error('Function not implemented.')
        }}
        onChange={function (index: number, value: unknown): void {
          throw new Error('Function not implemented.')
        }}
        onSubmit={function (infos: {
          isValid: boolean
          values: unknown
        }): void {
          throw new Error('Function not implemented.')
        }}
      />
    </StepContent>
  )
}

export default InscriptionForm
