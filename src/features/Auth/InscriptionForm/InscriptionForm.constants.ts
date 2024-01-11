import { InputTypes } from 'types/interfaces/FormTypes/InputObject'

export const INPUTS_INSCRIPTION_FORM = [
  {
    label: 'First Name',
    inputType: InputTypes.TEXT,
    fieldName: 'firstName',
    placeholder: 'Enter your first name',
    config: {
      required: 'This field is required',
      maxLength: 50,
    },
  },
  {
    label: 'Last Name',
    inputType: InputTypes.TEXT,
    fieldName: 'lastName',
    placeholder: 'Enter your last name',
    config: {
      required: 'This field is required',
      maxLength: 50,
    },
  },
  {
    label: 'Gender',
    inputType: InputTypes.SELECT,
    fieldName: 'gender',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
    config: {
      required: 'This field is required',
    },
  },
  {
    label: 'Street Address',
    inputType: InputTypes.TEXT,
    fieldName: 'streetAddress',
    placeholder: 'Enter your street address',
    config: {
      required: 'This field is required',
      maxLength: 100,
    },
  },
  {
    label: 'City',
    inputType: InputTypes.TEXT,
    fieldName: 'city',
    placeholder: 'Enter your city',
    config: {
      required: 'This field is required',
      maxLength: 50,
    },
  },
]
