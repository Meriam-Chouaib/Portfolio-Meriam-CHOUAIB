import { MultiRadioButtonsGroup } from 'components/CustomButtons/MultiRadioButtonsGroup/MultiRadioButtonsGroup'
import { Controller, useFormContext } from 'react-hook-form'

import { InputTypes } from 'types/interfaces/Input.type'
import { isObjectExist } from 'utils/helpers/object.helpers'

import CustomTextField from '../CustomTextField/CustomTextField'
import { GenericInputProps } from 'components/CustomInputs/GenericInput/GenericInput.type'

function GenericInput({
  inputObject,
  disabledForm,
  required,
  textAlign,
  tooltipText,
  hideHelperText,
  hideIcon,
  formatInputs,
  customHeight,
  isLoading,
  helperMessage,
  translationConfig,
  maxWidth,
  unit,
  optionsSelect,
  textAreaHeight,
  validatePattern,
  isRequired,
  textEditorHeight,
  format,
  onChangeTextEditor,
}: GenericInputProps) {
  const {
    inputType,
    fieldName,
    label,
    autoComplete,
    defaultValue,
    valueOptions,
    disabled,
    placeholder,
    size,
    options,
    config = {},
    optionsConfig,
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
    case InputTypes.MULTI_RADIO:
      return (
        <Controller
          render={({ field, fieldState }) => (
            <MultiRadioButtonsGroup
              error={fieldState.error}
              value={field.value}
              label={label}
              options={options ?? []}
              onChange={field.onChange}
              placeholder={placeholder}
              tooltipText={tooltipText}
              optionsConfig={optionsConfig}
              isLoading={isLoading}
              disabled={disabled}
            />
          )}
          name={fieldName}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
        />
      )

    default:
      return (
        <Controller
          render={({ field, fieldState }) => (
            <CustomTextField
              helperMessage={helperMessage}
              customHeight={customHeight}
              name={fieldName}
              label={label}
              inputType={inputType}
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error}
              required={Boolean(rules.required)}
              valueOptions={valueOptions}
              disabled={isDisabled}
              placeholder={placeholder}
              size={size}
              textAlign={textAlign}
              tooltipText={tooltipText}
              hideHelperText={hideHelperText}
              hideIcon={hideIcon}
              formatInputs={formatInputs}
              autoComplete={autoComplete}
              translationConfig={translationConfig}
              maxWidth={maxWidth}
              unit={unit}
              isRequired={isRequired}
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
