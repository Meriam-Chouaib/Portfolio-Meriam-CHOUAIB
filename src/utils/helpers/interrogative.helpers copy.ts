import { InterrogativeType } from 'types/interfaces/FormTypes/InterrogativeForm'
import { isObjectExist } from './object.helpers'

export const booleanToInterrogative = (value?: boolean) => {
  if (!isObjectExist(value)) {
    return InterrogativeType.EMPTY
  } else {
    return value ? InterrogativeType.YES : InterrogativeType.NO
  }
}

export const booleanToString = (value?: boolean) => {
  if (!isObjectExist(value)) {
    return InterrogativeType.EMPTY
  } else {
    return value ? 'true' : 'false'
  }
}
