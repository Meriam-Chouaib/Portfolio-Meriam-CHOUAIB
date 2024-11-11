import { ContactModel } from 'models/Contact.model'
import * as Yup from 'yup'
const { fields } = ContactModel
export const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, fields.fullName.invalidErrorMessage)
    .required(fields.fullName.requiredErrorMessage),
  email: Yup.string()
    .email(fields.email.invalidErrorMessage)
    .required(fields.email.requiredErrorMessage),
  message: Yup.string()
    .min(10, fields.message.invalidErrorMessage)
    .required(fields.message.requiredErrorMessage),
})
