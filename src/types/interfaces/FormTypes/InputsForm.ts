import GenericForm, { formTypes } from 'types/interfaces/FormTypes/GenericForm'
import { InputObject } from 'types/interfaces/FormTypes/InputObject'

export interface InputsForm
  extends GenericForm<InputsFormValue, unknown, boolean> {
  inputs: InputObject[]
  type: formTypes.INPUTS
}

export type InputsFormValue = Record<string, unknown>
