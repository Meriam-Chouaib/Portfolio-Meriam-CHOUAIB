import { Box, Typography, Dialog } from '@mui/material'
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

  // Handle CV Preview Dialog
  const [openCV, setOpenCV] = React.useState(false)
  const handleOpenCV = () => setOpenCV(true)
  const handleCloseCV = () => setOpenCV(false)

  // Use import for assets if possible, or keep require if strictly needed. 
  // Vite often supports import. Let's try to use the require pattern consistent with previous code 
  // explicitly or switch to import if TS allows. The previous code used require, so we stick to it for safety 
  // but cast to string context.
  // Ideally: import cvPdf from 'assets/CV Meriam Chouaib.pdf'
  // But let's use the one that was there to avoid build path issues if we can.
  // Actually, let's use a safe variable for it.
  const cvPath = new URL('../../assets/CV Meriam Chouaib.pdf', import.meta.url).href

  const onSubmit: SubmitHandler<InputsContact> = (data) => {
    // Pure frontend email via mailto
    const subject = `Portfolio Contact: ${data.fullName}`
    const body = `Name: ${data.fullName}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    window.location.href = `mailto:meriamchouaib7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <Box id='contactId' sx={{ py: 10, position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration elements could go here for "professional" look */}

      <Typography
        variant='h2'
        color='primary'
        sx={{ textAlign: 'center', mb: 2, fontWeight: 800 }}
      >
        {t('contact.title')}
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{ textAlign: 'center', mb: 8, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
      >
        {t('contact.subtitle')}
      </Typography>

      <Box sx={{ width: { xs: '95%', md: '85%', lg: '75%' }, margin: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'stretch'
          }}
        >
          {/* Contact Info & CV Section */}
          <Box
            sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}
          >
            <Box sx={{ p: 4, borderRadius: 4, bgcolor: 'background.paper', boxShadow: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant='h5' fontWeight={700} color='primary'>
                {t('contact.coordonnees')}
              </Typography>
              <Box>
                <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 0.5, fontWeight: 600 }}>
                  {t('contact.email_header')}
                </Typography>
                <Typography variant='body1' fontWeight={500}>
                  {t('contact.info_email')}
                </Typography>
              </Box>
              <Box>
                <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 0.5, fontWeight: 600 }}>
                  {t('contact.location_header')}
                </Typography>
                <Typography variant='body1' fontWeight={500}>
                  {t('contact.info_location')}
                </Typography>
              </Box>
            </Box>

            <Box sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 2,
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: 3,
              backgroundImage: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(33, 203, 243, 0.05) 100%)'
            }}>
              <Typography variant="h5" fontWeight="bold" color="primary">
                {t('contact.cv_title')}
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                {t('contact.cv_description')}
              </Typography>

              <CustomButton
                onClick={handleOpenCV}
                colorText='#fff'
                style={{ marginTop: 16 }}
              >
                {t('contact.cv_button_view')}
              </CustomButton>
            </Box>
          </Box>

          {/* Form Section */}
          <Box sx={{ flex: 1.5 }}>
            <Box sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, bgcolor: 'background.paper', boxShadow: 6 }}>
              <Typography variant='h5' sx={{ mb: 3, fontWeight: 700 }}>
                {t('contact.form_title')}
              </Typography>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <TextFieldStyled
                  name={fields.fullName.name}
                  type={'text'}
                  label={t(fields.fullName.label)}
                  variant="outlined"
                  fullWidth
                />
                <TextFieldStyled
                  name={fields.email.name}
                  type={'email'}
                  label={t(fields.email.label)}
                  variant="outlined"
                  fullWidth
                />

                <TextFieldStyled
                  name={fields.message.name}
                  type={'text'}
                  label={t(fields.message.label)}
                  multiline
                  rows={6}
                  variant="outlined"
                  fullWidth
                />
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <CustomButton isLoading={isSubmitting} colorText='#fff' width='100%'>
                    {t('contact.button_send')}
                  </CustomButton>
                </Box>
              </FormProvider>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CV Dialog */}
      <Dialog
        open={openCV}
        onClose={handleCloseCV}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { height: '80vh', borderRadius: 3 }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <Typography variant="h6" fontWeight="bold">{t('contact.cv_dialog_title')}</Typography>
          <Box>
            <CustomButton onClick={handleCloseCV} style={{ marginRight: 8, minWidth: 'auto', padding: '6px 12px', fontSize: '0.8rem' }} colorText='#fff'>
              {t('common.close')}
            </CustomButton>
            <CustomButton
              onClick={() => window.open(cvPath, '_blank')}
              colorText='#fff'
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            >
              {t('common.download')}
            </CustomButton>
          </Box>
        </Box>
        <Box sx={{ flex: 1, bgcolor: '#f5f5f5', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <iframe
            src={cvPath}
            title="CV Preview"
            width="100%"
            height="100%"
            style={{ border: 'none', flex: 1 }}
          />
        </Box>
      </Dialog>
    </Box >
  )
}

export default Contact
