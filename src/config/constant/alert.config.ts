import { AlertObject } from 'types/interfaces/AlertObject'

export const ErrorObject: AlertObject = {
  type: 'error',
  active: true,
  title: 'common.something_went_wrong',
  message: '',
}

export const SuccessObject: AlertObject = {
  type: 'success',
  active: true,
  title: 'common.done',
  message: '',
}
