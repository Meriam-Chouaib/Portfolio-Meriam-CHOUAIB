import { ErrorObject } from 'config/constant/alert.config'
import { useEffect } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { pushAlert } from 'redux/slices/alerts/alerts'
import {
  getArrayErrorTitleAndMessage,
  getErrorTitleAndMessage,
} from 'utils/helpers/error.helpers'

export default function useErrorAlert(error?: unknown) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (error) {
      showError(error)
    }
  }, [error])

  const showError = (unknownError: unknown) => {
    const { message, title } = getErrorTitleAndMessage(unknownError)
    dispatch(
      pushAlert({
        ...ErrorObject,
        message,
        title,
      })
    )
  }

  const showOrSetFieldError = (
    errors: unknown,
    setFieldError: (name: string, errorMessage: string) => void,
    getFieldName: (
      error: string
    ) => { fieldName: string; errorMessage: string }[]
  ) => {
    const errnos = getArrayErrorTitleAndMessage(errors)
    let isFieldError = false
    errnos?.forEach((errno) => {
      const fieldErrors = getFieldName(errno)
      if (fieldErrors.length) {
        isFieldError = true
        fieldErrors.forEach((fieldError) => {
          setFieldError(fieldError.fieldName, fieldError.errorMessage)
        })
      }
    })
    if (!isFieldError) {
      showError(errors)
    }
  }

  return { showError, showOrSetFieldError }
}
