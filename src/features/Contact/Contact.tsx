import React, { useState } from 'react';
import { Box, Typography, Dialog, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomButton } from 'components/Buttons/CustomButton/CustomButton';
import MySocialIcons from 'features/MySocialIcons/MySocialIcons';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GetAppIcon from '@mui/icons-material/GetApp';
import CloseIcon from '@mui/icons-material/Close';

// Import de tous nos composants stylisés
import {
  ContactWrapper,
  ContentGrid,
  InfoColumn,
  InfoCard,
  PreviewColumn,
  CVPreviewCard,
  ActionIconButton
} from './Contact.style';

function Contact() {
  const { t } = useTranslation();
  const [openCV, setOpenCV] = useState(false);

  const handleOpenCV = () => setOpenCV(true);
  const handleCloseCV = () => setOpenCV(false);
  const cvPath = new URL('../../assets/CV Meriam Chouaib.pdf', import.meta.url).href;

  return (
    <ContactWrapper id='contactId'>
      <Typography variant='h2' color='primary' sx={{ textAlign: 'center', mb: 2, fontWeight: 800 }}>
        {t('contact.title')}
      </Typography>

      <Typography variant='subtitle1' sx={{ textAlign: 'center', mb: 8, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
        {t('contact.subtitle')}
      </Typography>

      <Box sx={{ width: { xs: '95%', md: '85%', lg: '75%' }, margin: 'auto' }}>
        <ContentGrid>

          {/* GAUCHE : INFOS */}
          <InfoColumn>
            <InfoCard>
              <Typography variant='h5' fontWeight={700} color='primary'>{t('contact.coordonnees')}</Typography>

              <Box>
                <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 0.5, fontWeight: 600 }}>{t('contact.email_header')}</Typography>
                <Typography variant='body1' fontWeight={500} color='secondary'>meriamchouaib7@gmail.com</Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 1.5, fontWeight: 600 }}>Socials</Typography>
                <MySocialIcons />
              </Box>

              <CustomButton onClick={() => window.open('mailto:meriamchouaib7@gmail.com')} colorText='#fff' style={{ marginTop: 24, alignSelf: 'flex-start' }}>
                {t('contact.button_send_email')}
              </CustomButton>
            </InfoCard>
          </InfoColumn>

          {/* DROITE : PREVIEW CV */}
          <PreviewColumn>
            <CVPreviewCard onClick={handleOpenCV}>
              <Typography variant="h6" color="secondary.main" sx={{ mb: 2, textAlign: 'center', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <VisibilityIcon fontSize="small" color="primary" /> My Resume
              </Typography>

              <Box sx={{ width: '100%', height: 'calc(100% - 40px)', bgcolor: '#f0f0f0', borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
                <iframe src={`${cvPath}#toolbar=0`} title='CV Preview' width='100%' height='130%' style={{ border: 'none', pointerEvents: 'none' }} />
                <Box className="overlay" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease', zIndex: 3 }}>
                  <CustomButton colorText='#fff'>View Full CV</CustomButton>
                </Box>
              </Box>
            </CVPreviewCard>
          </PreviewColumn>

        </ContentGrid>
      </Box>

      {/* MODAL CV */}
      <Dialog open={openCV} onClose={handleCloseCV} maxWidth='lg' fullWidth PaperProps={{ sx: { height: '90vh', borderRadius: 3 } }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <Typography variant='h6' fontWeight='bold' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <VisibilityIcon color="primary" /> {t('contact.cv_dialog_title')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title={t('common.download')}>
              <ActionIconButton onClick={() => window.open(cvPath, '_blank')}><GetAppIcon fontSize="small" /></ActionIconButton>
            </Tooltip>
            <Tooltip title={t('common.close')}>
              <ActionIconButton onClick={handleCloseCV}><CloseIcon fontSize="small" /></ActionIconButton>
            </Tooltip>
          </Box>
        </Box>
        <iframe src={cvPath} title='Full CV' width='100%' height='100%' style={{ border: 'none' }} />
      </Dialog>
    </ContactWrapper>
  );
}

export default Contact;