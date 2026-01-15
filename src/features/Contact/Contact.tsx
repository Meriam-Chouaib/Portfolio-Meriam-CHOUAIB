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
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const onSubmit: SubmitHandler<InputsContact> = (data) => console.log(data)

  return (
    <Box id='contactId' sx={{ py: 10 }}>
      <Typography variant='h2' sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }} color='secondary' >
        {t('contact.title')}
      </Typography>
      <Typography variant='subtitle1' sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
        {t('contact.subtitle')}
      </Typography>

      <Box sx={{ width: { xs: '95%', md: '80%' }, margin: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8 }}>
          {/* Contact Info */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>Email</Typography>
              <Typography variant="body1">{t('contact.info_email')}</Typography>
            </Box>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>Location</Typography>
              <Typography variant="body1">{t('contact.info_location')}</Typography>
            </Box>
            {/* Could add Social Icons here again if needed */}
          </Box>

          {/* Form */}
          <Box sx={{ flex: 1 }}>
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
                multiline
                rows={4}
              />
              <CustomButton isLoading={isSubmitting}>
                {t('contact.button_send')}
              </CustomButton>
            </FormProvider>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
