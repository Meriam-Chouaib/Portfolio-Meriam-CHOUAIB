import CardRequest from 'types/models/CardRequest/CardRequest'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { useState } from 'react'
import useFormGroup from 'hooks/useFormGroup'
import { INPUTS_INSCRIPTION_FORM } from 'features/Auth/InscriptionForm/InscriptionForm.constants'
import { useFormContext } from 'react-hook-form'
import { GlobalVariables } from 'config/constant'
import { onSubmitPart1 } from 'features/Auth/InscriptionForm/InscriptionForm.helper'
export const useInscriptionForm = (
  StepsRecord: StepsRecord,
  onNextStep: (stepsRecord: StepsRecord, cardRequest?: CardRequest) => void,
  cardRequest?: CardRequest
) => {
  const [submitCount, setSubmitCount] = useState(0)
  const {
    forms,
    formsValues,
    validForms,
    onChange,
    checkDependency,
    setValidForms,
  } = useFormGroup(INPUTS_INSCRIPTION_FORM(StepsRecord, cardRequest))

  const formMethods = useFormContext()
  const { formState } = formMethods
  const validFormsInputs = formState.isValid

  const onSubmit = (infos: { isValid: boolean; values: unknown }) => {
    onSubmitPart1(infos, onChange, setValidForms)
  }

  const handleSubmit = () => {
    setSubmitCount(submitCount + 1)

    onNextStep(StepsRecord)
  }
  const resetSubmit = () => {
    setSubmitCount(0)
  }
  const disableNextFn = (): boolean => {
    const validFormsOrInputs = validForms || validFormsInputs
    // TODO traitement en cas ou un champ vide ou incorrect!
    if (validFormsOrInputs) {
      return GlobalVariables.BOOLEAN_FALSE
    }

    return GlobalVariables.BOOLEAN_FALSE
  }
  return {
    forms,
    onSubmit,
    handleSubmit,
    resetSubmit,
    formsValues,
    validForms,
    onChange,
    checkDependency,
    setValidForms,
    disableNextFn,
  }
}
