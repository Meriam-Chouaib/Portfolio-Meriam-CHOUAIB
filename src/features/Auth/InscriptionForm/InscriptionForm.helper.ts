import { SetStateAction } from 'react'

export const onSubmitPart1 = (
  infos: { isValid: boolean; values: unknown },
  onChange: (
    index: number,
    value: unknown,
    arrayIndex?: number | undefined
  ) => void,
  setValidForms: (value: SetStateAction<boolean>) => void
) => {
  if (infos.isValid) {
    onChange(9, infos.values)
  }
  setValidForms(infos.isValid)
}
