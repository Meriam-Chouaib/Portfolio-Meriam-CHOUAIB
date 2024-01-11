import GenericForm, {
  InputDependency,
  formTypes,
  OptionsType,
} from 'types/interfaces/FormTypes/GenericForm'

export interface InterrogativeForm
  extends GenericForm<
    InterrogativeType | null,
    InterrogativeType,
    InterrogativeType
  > {
  type: formTypes.INTERROGATIVE
  options: OptionsType<InterrogativeType>[]
}

export type InterrogativeElement = OptionsType<InterrogativeType>

export type InterrogativeFormDependency = InputDependency<InterrogativeType>

export enum InterrogativeType {
  YES = 'yes',
  NO = 'no',
  EMPTY = '',
}
