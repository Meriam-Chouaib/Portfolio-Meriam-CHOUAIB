import FormsGroup from 'components/Forms/FormsGroup/FormsGroup'
import GenericForm from 'components/Forms/GenericForm/GenericForm'
import { InfoUserProps } from 'features/Auth/InscriptionForm/InfoUserForm/InfoUserForm.type'
import { useTranslation } from 'react-i18next'

function InfoUserForms({
  inputs,
  checkDependency,
  onChange,
  submitCount,
  onSubmit,
}: InfoUserProps) {
  console.log('🚀 ~ inputs:', inputs)
  const { t } = useTranslation()

  return (
    <FormsGroup title={t('signup.title')}>
      {inputs.map((question, index) => (
        <GenericForm
          key={`form-${index}`}
          form={question}
          onChange={(value: unknown, arrayIndex?: number) => {
            onChange(index, value, index)
            console.log('🚀 ~ index:', index)
            console.log('value', value)
          }}
          isNotActive={
            question.dependsOn &&
            !checkDependency(question.dependsOn.id, question.dependsOn.value)
          }
          submitCount={submitCount}
          alert={
            checkDependency(
              question.alert?.dependency?.id,
              question.alert?.dependency?.value
            )
              ? question.alert?.content
              : undefined
          }
          onSubmit={(infos: Record<string, unknown>) => {
            onSubmit({ isValid: !!infos.isValid, values: infos.values }, index)
          }}
        />
      ))}
    </FormsGroup>
  )
}

export default InfoUserForms
