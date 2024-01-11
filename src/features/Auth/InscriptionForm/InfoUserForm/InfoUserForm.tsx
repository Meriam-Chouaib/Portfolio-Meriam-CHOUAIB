import FormsGroup from 'components/Forms/FormsGroup/FormsGroup'
import GenericForm from 'components/Forms/GenericForm/GenericForm'
import { InfoUserProps } from 'features/Auth/InscriptionForm/InfoUserForm/InfoUserForm.type'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { formTypes } from 'types/interfaces/FormTypes/GenericForm'
import { InputTypes } from 'types/interfaces/FormTypes/InputObject'
import { InputsForm as InputsFormType } from 'types/interfaces/FormTypes/InputsForm'

function InfoUserForm({
  oldStepsRecord,
  onNextStep,
  onPreviousStep,
  onChange,
  onSubmit,
  forms,
}: InfoUserProps) {
  const { t } = useTranslation()
  return (
    <FormsGroup title={t('signup.title')}>
      {forms.map((form, index) => (
        <GenericForm
          form={form}
          onChange={(value: unknown) => onChange(index, value)}
          onSubmit={(infos: Record<string, unknown>) => {
            onSubmit({ isValid: !!infos.isValid, values: infos.values })
          }}
        />
      ))}
    </FormsGroup>
  )
}

export default InfoUserForm
