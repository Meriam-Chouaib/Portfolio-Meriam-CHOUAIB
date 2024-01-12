import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import GenericForm from 'types/interfaces/FormTypes/GenericForm'

export interface InfoUserProps {
  // forms: GenericForm<unknown, unknown, unknown>[]
  // onCheckDependency: (id: number, value: unknown) => boolean

  // onChange: (index: number, value: unknown) => void
  // onSubmit: (infos: { isValid: boolean; values: unknown }) => void
  // isLoading?: boolean
  // submitCount: number
  inputs: GenericForm<unknown, unknown, unknown>[]
  onChange: (index: number, value: unknown, arrayIndex?: number) => void
  checkDependency: (questionId?: number, value?: unknown) => boolean
  submitCount: number
  onSubmit: (
    infos: { isValid: boolean; values: unknown },
    formIndex?: number
  ) => void
}
