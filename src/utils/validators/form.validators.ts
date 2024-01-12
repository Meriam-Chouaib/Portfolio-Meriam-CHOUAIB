import { ArrayOfFormsForm } from 'types/interfaces/FormTypes/ArrayOfFormsForm'

export const validateArrayOfForm = (arrayOfForms: ArrayOfFormsForm) => {
  let isValid = true
  arrayOfForms.forms.forEach((innerForm) => {
    isValid = isValid ? !!innerForm.isValid : false
  })
  return isValid
}
