import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import GenericForm from 'types/interfaces/FormTypes/GenericForm'

export interface InfoUserProps {
  forms: GenericForm<unknown, unknown, unknown>[]

  oldStepsRecord?: StepsRecord
  onNextStep?: (newStepsRecord: StepsRecord) => void
  onPreviousStep?: () => void
  onChange: (index: number, value: unknown) => void
  onSubmit: (infos: { isValid: boolean; values: unknown }) => void
}
