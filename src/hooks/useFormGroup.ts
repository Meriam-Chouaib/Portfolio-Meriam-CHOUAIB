import { GlobalVariables } from 'config/constant'
import { useEffect, useState } from 'react'
import { ArrayOfFormsForm } from 'types/interfaces/FormTypes/ArrayOfFormsForm'
import { FilesForm } from 'types/interfaces/FormTypes/FilesForm'
import GenericForm, { formTypes } from 'types/interfaces/FormTypes/GenericForm'
import { InputsArray } from 'types/interfaces/FormTypes/InputObject'
import {
  addOrRemoveFromArray,
  addOrUpdateArray,
  findById,
  generateUpdatedArray,
  updateArray,
} from 'utils/helpers/array.helpers'
import { pushInputsArrayOfFormsValueToRecord } from 'utils/helpers/form.helpers'
import { validateArrayOfForm } from 'utils/validators/form.validators'

// This is a custom hook that will be used to handle the state of the forms
export default function useFormGroup(
  initialState: GenericForm<unknown, unknown, unknown>[] = []
) {
  const [forms, setForms] = useState([...initialState])
  const [formsValues, setFormsValues] = useState<Record<string, unknown>>({})
  const [validForms, setValidForms] = useState(false)

  // This useEffect will be used to update the values and the validation of the forms
  useEffect(() => {
    setValidForms(validateForms())
    const newValues: Record<string, unknown> = {}
    forms.forEach((form) => {
      if (form.type === formTypes.INPUTS_ARRAY) {
        const formsArray = form as ArrayOfFormsForm
        pushInputsArrayOfFormsValueToRecord(formsArray, newValues)
      } else {
        if (
          !form.dependsOn ||
          checkDependency(form.dependsOn?.id, form.dependsOn?.value)
        ) {
          newValues[form.name] = form.value
        }
      }
    })
    setFormsValues(newValues)
  }, [forms])

  /**
   * This function will be used to check if the dependency of an input is met
   * @param index The index of the input to be updated
   * @param value The new value of the input
   */
  const onChange = (index: number, value: unknown, arrayIndex?: number) => {
    const newForms = [...forms]
    let formToUpdate = { ...newForms[index] }
    switch (formToUpdate.type) {
      case formTypes.FILES_UPLOAD:
        if (formToUpdate.options) {
          formToUpdate = {
            ...formToUpdate,
            value: [
              ...updateArray(
                formToUpdate.value as FilesForm[],
                value as FilesForm,
                arrayIndex as number
              ),
            ],
          }
        } else {
          formToUpdate = {
            ...formToUpdate,
            value: generateUpdatedArray(
              formToUpdate.value as FilesForm[],
              value as FilesForm,
              typeof arrayIndex === 'number'
                ? arrayIndex
                : GlobalVariables.NoIndex
            ),
          }
        }

        setForms([
          ...newForms.slice(0, index),
          formToUpdate,
          ...newForms.slice(index + 1),
        ])
        break
      case formTypes.INPUTS_ARRAY:
        if (arrayIndex) {
          addOrUpdateArray(
            newForms[index].forms as InputsArray[],
            value as InputsArray,
            typeof arrayIndex === 'number'
              ? arrayIndex
              : GlobalVariables.NoIndex
          )
          setForms(newForms)
        } else {
          newForms[index].value = value
          setForms(newForms)
        }
        break
      case formTypes.CHECK_LIST:
        formToUpdate = {
          ...formToUpdate,
          value: addOrRemoveFromArray(formToUpdate.value as unknown[], value),
        }
        setForms([
          ...newForms.slice(0, index),
          formToUpdate,
          ...newForms.slice(index + 1),
        ])
        break
      case formTypes.INTEGRATED_INPUTS:
        newForms[index].value = value
        setForms(newForms)
        break
      default:
        formToUpdate = {
          ...formToUpdate,
          value,
        }
        setForms([
          ...newForms.slice(0, index),
          formToUpdate,
          ...newForms.slice(index + 1),
        ])
        break
    }
  }

  /**
   * This function will be used to check if the dependency of an input is met
   * The dependency is met if the value of the input with the id provided is equal to the value provided
   * If the dependency is met, the input will be shown
   * @param inputId The id of the input to be updated
   * @param value The new value of the input
   */
  const checkDependency = (inputId?: number, value?: unknown): boolean => {
    if (!inputId || !value) {
      return false
    }
    const dependedInput = findById<GenericForm<unknown, unknown, unknown>>(
      inputId,
      forms
    )
    if (!dependedInput) {
      return false
    }
    if (dependedInput.dependsOn) {
      return (
        checkDependency(
          dependedInput.dependsOn.id,
          dependedInput.dependsOn.value
        ) && dependedInput.value === value
      )
    } else {
      return dependedInput.value === value
    }
  }

  /**
   * This function will used to validate all the forms
   * @returns boolean indicating if all the forms are valid
   */
  const validateForms = (): boolean => {
    let isValid = true
    forms.forEach((form) => {
      if (form.type === formTypes.INPUTS_ARRAY) {
        const arrayOfForms = form as ArrayOfFormsForm
        isValid = isValid ? validateArrayOfForm(arrayOfForms) : false
      } else if (
        form.validate &&
        (!form.dependsOn ||
          checkDependency(form.dependsOn?.id, form.dependsOn?.value))
      ) {
        isValid = isValid ? form.validate(form.value) : false
      } else {
        isValid = !!isValid
      }
    })
    return isValid
  }

  const enableForm = (index: number, disabled?: boolean | string) => {
    const newForms = [...forms]
    const formToUpdate = { ...newForms[index] }
    const newForm = { ...formToUpdate, disabled }
    setForms([
      ...newForms.slice(0, index),
      newForm,
      ...newForms.slice(index + 1),
    ])
  }

  const validateForm = (
    formIndex: number,
    isValid: boolean,
    innerFormIndex?: number
  ) => {
    const newForms = [...forms]
    const form = newForms[formIndex] as ArrayOfFormsForm
    if (typeof innerFormIndex !== 'undefined') {
      form.forms[innerFormIndex].isValid = isValid
      let allFormsValid = true
      form.forms.forEach((innerForm) => {
        if (!innerForm.isValid) {
          allFormsValid = false
        }
      })
      form.isNotValid = !allFormsValid
    } else {
      form.isNotValid = !isValid
    }

    setForms(newForms)
  }

  const resetForms = (
    newForms: GenericForm<unknown, unknown, unknown>[] = []
  ) => {
    setForms([...newForms])
  }

  return {
    forms,
    formsValues,
    validForms,
    onChange,
    setValidForms,
    validateForm,
    validateForms,
    checkDependency,
    enableForm,
    resetForms,
  }
}
