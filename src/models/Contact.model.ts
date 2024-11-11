export const ContactModel = {
  fields: {
    fullName: {
      label: 'contact.full_name_label',
      name: 'fullName',
      placeholder: 'contact.full_name_placeholder',
      requiredErrorMessage: 'contact.full_name_required',
      invalidErrorMessage: 'contact.full_name_invalid',
    },
    email: {
      label: 'contact.email_label',
      name: 'email',
      placeholder: 'contact.email_placeholder',
      requiredErrorMessage: 'contact.email_required',
      invalidErrorMessage: 'contact.email_invalid',
    },
    message: {
      label: 'contact.message_label',
      name: 'message',
      placeholder: 'contact.message_placeholder',
      requiredErrorMessage: 'contact.message_required',
      invalidErrorMessage: 'contact.message_invalid',
    },
  },
  defaultValues: {
    fullName: '',
    email: '',
    message: '',
  },
}
