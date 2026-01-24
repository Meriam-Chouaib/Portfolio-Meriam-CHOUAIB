import { Box, Typography, Dialog, Stack, useTheme, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomButton } from 'components/Buttons/CustomButton/CustomButton'
import MySocialIcons from 'features/MySocialIcons/MySocialIcons'
import VisibilityIcon from '@mui/icons-material/Visibility'
import GetAppIcon from '@mui/icons-material/GetApp'

function Contact() {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // Handle CV Preview Dialog
  const [openCV, setOpenCV] = useState(false)
  const handleOpenCV = () => setOpenCV(true)
  const handleCloseCV = () => setOpenCV(false)

  const cvPath = new URL('../../assets/CV Meriam Chouaib.pdf', import.meta.url).href

  return (
    <Box
      id='contactId'
      sx={{ py: 10, position: 'relative', overflow: 'hidden' }}
    >
      <Typography
        variant='h2'
        color='primary'
        sx={{ textAlign: 'center', mb: 2, fontWeight: 800 }}
      >
        {t('contact.title')}
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          textAlign: 'center',
          mb: 8,
          color: 'text.secondary',
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        {t('contact.subtitle')}
      </Typography>

      <Box sx={{ width: { xs: '95%', md: '85%', lg: '75%' }, margin: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            gap: 6,
            alignItems: 'stretch',
          }}
        >
          {/* Left Side: Contact Info */}
          <Box
            sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}
          >
            <Box
              sx={{
                p: 4,
                borderRadius: 4,
                bgcolor: 'background.paper',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                height: '100%',
                justifyContent: 'center'
              }}
            >
              <Typography variant='h5' fontWeight={700} color='primary'>
                {t('contact.coordonnees')}
              </Typography>

              <Box>
                <Typography
                  variant='subtitle2'
                  color='text.secondary'
                  sx={{ mb: 0.5, fontWeight: 600 }}
                >
                  {t('contact.email_header')}
                </Typography>
                <Typography variant='body1' fontWeight={500}>
                  meriamchouaib7@gmail.com
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant='subtitle2'
                  color='text.secondary'
                  sx={{ mb: 0.5, fontWeight: 600 }}
                >
                  {t('contact.location_header')}
                </Typography>
                <Typography variant='body1' fontWeight={500}>
                  {t('contact.info_location')}
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 1.5, fontWeight: 600 }}>
                  Socials
                </Typography>
                <MySocialIcons />
              </Box>

              <CustomButton
                onClick={() => window.open('mailto:meriamchouaib7@gmail.com')}
                colorText='#fff'
                style={{ marginTop: 24, alignSelf: 'flex-start' }}
              >
                {t('contact.button_send_email') || 'Send Me an Email'}
              </CustomButton>
            </Box>
          </Box>

          {/* Right Side: CV Preview (Replaces Form) */}
          <Box sx={{ flex: 1.2 }}>
            <Box
              onClick={handleOpenCV}
              sx={{
                position: 'relative',
                p: 2,
                borderRadius: 4,
                bgcolor: 'background.paper',
                boxShadow: 6,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 10,
                  '& .overlay': {
                    opacity: 1,
                  }
                },
                height: { xs: 400, md: 500 },
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  textAlign: 'center',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                <VisibilityIcon fontSize="small" color="primary" /> My Resume (Click to View)
              </Typography>

              {/* PDF Preview Container */}
              <Box
                sx={{
                  width: '100%',
                  height: 'calc(100% - 40px)',
                  bgcolor: '#f0f0f0',
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Invisible Overlay to capture clicks over the iframe */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    cursor: 'pointer'
                  }}
                />

                <iframe
                  src={`${cvPath}#toolbar=0&navpanes=0&scrollbar=0`}
                  title='CV Small Preview'
                  width='100%'
                  height='130%' // Slightly larger to hide bottom controls if any
                  style={{
                    border: 'none',
                    pointerEvents: 'none', // Disable iframe interaction so the parent Box click works
                    transformOrigin: 'top center'
                  }}
                />

                {/* Hover Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 3,
                    pointerEvents: 'none' // Let clicks pass to the parent
                  }}
                >
                  <CustomButton
                    colorText='#fff'
                    style={{ pointerEvents: 'auto' }} // Re-enable pointer events for the button visually
                  >
                    <VisibilityIcon sx={{ mr: 1 }} /> View Full CV
                  </CustomButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CV Dialog */}
      <Dialog
        open={openCV}
        onClose={handleCloseCV}
        maxWidth='lg'
        fullWidth
        PaperProps={{
          sx: { height: '90vh', borderRadius: 3, m: 2 },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            bgcolor: 'background.paper'
          }}
        >
          <Typography variant='h6' fontWeight='bold' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <VisibilityIcon color="primary" /> {t('contact.cv_dialog_title')}
          </Typography>
          <Box>
            <CustomButton
              onClick={handleCloseCV}
              style={{
                marginRight: 8,
                minWidth: 'auto',
                padding: '6px 12px',
                fontSize: '0.8rem',
              }}
              colorText='#fff'
            >
              {t('common.close')}
            </CustomButton>
            <CustomButton
              onClick={() => window.open(cvPath, '_blank')}
              colorText='#fff'
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            >
              <GetAppIcon sx={{ mr: 0.5, fontSize: 18 }} /> {t('common.download')}
            </CustomButton>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            bgcolor: '#525659', // Dark gray standard PDF reader background
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <iframe
            src={cvPath}
            title='CV Full View'
            width='100%'
            height='100%'
            style={{ border: 'none', flex: 1 }}
          />
        </Box>
      </Dialog>
    </Box>
  )
}

export default Contact
