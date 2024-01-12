import { RegularExpressions } from './regularExpressions'

export const REQUIRED_INPUT_TRANSLATION = 'common.required'

export const InputsConfig = {
  DefaultType: 'text',
  DefaultMaxLength: 100,
  DefaultMinLength: 1,
  DefaultRequired: true,
  DefaultDefaultValue: '',
  DefaultLabel: '',
  DefaultPlaceholder: '',
  DefaultConfig: {
    required: REQUIRED_INPUT_TRANSLATION,
    maxLength: { value: 100, message: 'common.maxLength' },
    minLength: { value: 1, message: 'common.minLength' },
  },
  Name: {
    MaxLength: 30,
    MinLength: 3,
    Config: {
      required: REQUIRED_INPUT_TRANSLATION,
      maxLength: { value: 30, message: 'common.maxLength' },
      minLength: { value: 3, message: 'common.minLength' },
    },
  },
  Reason: {
    MaxLength: 50,
    MinLength: 10,
    Config: {
      required: REQUIRED_INPUT_TRANSLATION,
      maxLength: { value: 50, message: 'common.maxLength' },
      minLength: { value: 10, message: 'common.minLength' },
    },
  },
  PassportNumber: {
    DefaultValue: '000000000',
    MaxLength: 9,
    Config: {
      required: REQUIRED_INPUT_TRANSLATION,
      pattern: {
        value: /^[A-Z0-9_.-]{9}$/,
        message: 'identification.invalid_passport_number',
      },
      maxLength: {
        value: 9,
        message: 'identification.invalid_passport_number',
      },
      minLength: {
        value: 9,
        message: 'identification.invalid_passport_number',
      },
    },
  },
  Email: {
    MaxLength: 30,
    Config: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'information.email.invalid_email',
      },
    },
  },
  Password: {
    MinLength: 8,
    Config: {
      pattern: {
        value: RegularExpressions.PASSWORD_REG_EXP,
        message: 'identification.invalid_password',
      },
    },
  },
  Phone: {
    MaxLength: 15,
    Config: {
      pattern: {
        value: /^((\+?\d{1,3}|\d{1,4})\d{1,14}|d{1,14})$/,
        message: 'information.phone.invalid_phone',
      },
    },
  },
  Address: {
    MaxLength: 30,
    poBox: {
      MaxLength: 5,
    },
    zipCode: {
      MaxLength: 8,
    },
  },
  Text: {
    MaxLength: 100,
    Config: {
      maxLength: { value: 100, message: 'common.maxLength' },
    },
  },
  CardNumber: {
    MaxLength: 16,
    Config: {
      pattern: {
        value: /^[0-9]{16}$/,
        message: 'payment.invalid_card_number',
      },
      maxLength: { value: 16, message: 'payment.invalid_card_number' },
      minLength: { value: 16, message: 'payment.invalid_card_number' },
    },
  },
  CardCvv: {
    MaxLength: 3,
    Config: {
      pattern: {
        value: /^[0-9]{3}$/,
        message: 'payment.invalid_cvv',
      },
      maxLength: { value: 3, message: 'payment.invalid_cvv' },
      minLength: { value: 3, message: 'payment.invalid_cvv' },
    },
  },
  IdCode: {
    MaxLength: 5,
    Config: {
      required: REQUIRED_INPUT_TRANSLATION,
      pattern: {
        value: /^[0-9]{5}$|^[0-9]{9}$/,
        message: 'accessCard.invalid_id_code',
      },
      maxLength: { value: 9, message: 'accessCard.invalid_id_code' },
      minLength: { value: 5, message: 'accessCard.invalid_id_code' },
    },
  },
  Select: {
    DefaultValue: '',
  },
}

export const FaceCaptureConfig = {
  File: {
    name: 'face-capture',
    type: 'image/png',
  },
  Style: {
    md: {
      width: 640,
      height: 360,
    },
    sm: {
      width: 360,
      height: 640,
    },
    xs: {
      width: 250,
      height: 360,
    },
  },
}

export const FaceLivenessConfig = {
  File: {
    name: 'face-liveness',
    type: 'image/png',
  },
}

export const SignatureConfig = {
  type: 'image/png',
  name: 'signature',
}
