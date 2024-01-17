import { MultiRadioButtonsGroup } from 'components/CustomButtons/MultiRadioButtonsGroup/MultiRadioButtonsGroup'
import {
  Controller,
  ControllerFieldState,
  useFormContext,
} from 'react-hook-form'

import { isObjectExist } from 'utils/helpers/object.helpers'

import CustomTextField from '../CustomTextField/CustomTextField'
import { GenericInputProps } from 'components/CustomInputs/GenericInput/GenericInput.type'
import { InputTypes } from 'types/interfaces/FormTypes/InputObject'

function GenericInput({
  inputObject,
  disabledForm,
  required,
  haveText,
  selectInputDependedValue,
  dependedInputObject,
}: Readonly<GenericInputProps>) {
  const {
    inputType,
    fieldName,
    label,
    description,
    defaultValue,
    valueOptions,
    options = [],
    config = {},
    disabled,
    placeholder,
    styled,
  } = inputObject

  const rules = {
    ...config,
    required: isObjectExist(required)
      ? required && config.required
      : config.required,
  }

  const isDisabled = disabledForm ?? disabled

  const { control } = useFormContext()

  switch (inputType) {
    default:
      return (
        <Controller
          render={({ field, fieldState }) => (
            <CustomTextField
              label={label}
              inputType={inputType}
              field={field}
              fieldState={
                rules.required
                  ? fieldState
                  : ({ ...fieldState } as ControllerFieldState)
              }
              required={Boolean(rules.required)}
              valueOptions={valueOptions}
              disabled={isDisabled}
              placeholder={placeholder}
              style={styled}
            />
          )}
          name={fieldName}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
        />
      )
  }
}

export default GenericInput
