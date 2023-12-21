export const getErrorMessage = (
  error: string
): { fieldName: string; errorMessage: string }[] => {
  if (error === 'error.INCORRECT_LOGIN_PARAMETERS') {
    return [
      {
        fieldName: 'password',
        errorMessage: 'error.INCORRECT_LOGIN_PARAMETERS_helper_text',
      },
    ]
  } else {
    return []
  }
}
