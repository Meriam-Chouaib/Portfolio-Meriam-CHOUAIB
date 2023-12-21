import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import i18nInstance from 'locales/i18nInstance'
import ErrorType from 'types/interfaces/ErrorType'

/**
 * Check if the error is a network error
 */
export function isConnectionError(
  error: unknown
): error is FetchBaseQueryError {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    (error as { status: string | number }).status === 'FETCH_ERROR'
  )
}

/**
 * Takes an error and extract the error message if exists
 */
export function getCustomError(error: unknown): ErrorType {
  if (isConnectionError(error)) {
    return {
      data: {
        title: error.status as string,
        errno: error.status as string,
      },
    }
  } else {
    return {
      data: {
        title: (error as ErrorType).data?.title,
        errno: (error as ErrorType).data?.errno,
        message: (error as ErrorType).data?.message,
      },
    }
  }
}

export const generateErrno = (errno: unknown) => {
  if (Array.isArray(errno)) {
    return i18nInstance.exists(`error.${errno[0]}`) ? errno[0] : 'SWH'
  } else {
    return i18nInstance.exists(`error.${errno as string}`) ? errno : 'SWH'
  }
}

export const getArrayErrorTitleAndMessage = (unknownError: unknown) => {
  const errors = getCustomError(unknownError)

  if (Array.isArray(errors.data.errno)) {
    return errors.data.errno.map((err) => {
      return `error.${generateErrno(err)}` ?? 'error.SWH'
    })
  }
}

export const getErrorTitleAndMessage = (unknownError: unknown) => {
  const error = getCustomError(unknownError)

  return {
    title: error.data?.errno
      ? `error.${generateErrno(error.data?.errno)}_title`
      : error.data?.title ?? 'error.SWH_title',
    message: error.data?.errno
      ? `error.${generateErrno(error.data?.errno)}`
      : error.data?.message ?? 'error.SWH',
  }
}
