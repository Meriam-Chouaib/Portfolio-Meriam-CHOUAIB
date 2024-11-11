import { Box, Typography } from '@mui/material'
import GenericForm from 'components/Forms/GenericForm/GenericForm'
import { InputsContact } from 'features/Contact/Contact.tyoes'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { formTypes } from 'types/interfaces/FormTypes/GenericForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactModel } from 'models/Contact.model'
import { ContactSchema } from 'features/Contact/Validation.schema'
import { FormProvider, TextField } from 'components/hookform'
import { TextFieldStyled } from 'features/Contact/Contact.style'
import { CustomButton } from 'components/Buttons/CustomButton/CustomButton'

function Contact() {
  const { t } = useTranslation()
  const { defaultValues, fields } = ContactModel
  const methods = useForm({
    resolver: yupResolver(ContactSchema),
    defaultValues,
  })
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },

    formState: { errors },
  } = methods
  const onSubmit: SubmitHandler<InputsContact> = (data) => console.log(data)
  return (
    <Box id='contactId' sx={{ padding: '40px 0px' }}>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>
        {t('contact.title')}
      </Typography>
      <Box sx={{ padding: '40px 0px', width: '70%', margin: 'auto' }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <TextFieldStyled
            name={fields.fullName.name}
            type={'text'}
            label={t(fields.fullName.label)}
          />
          <TextFieldStyled
            name={fields.email.name}
            type={'email'}
            label={t(fields.email.label)}
          />

          <TextFieldStyled
            name={fields.message.name}
            type={'text'}
            label={t(fields.message.label)}
          />
          <CustomButton isLoading={isSubmitting}>
            {t('contact.button_send')}
          </CustomButton>
        </FormProvider>
      </Box>
    </Box>
  )
}

export default Contact
