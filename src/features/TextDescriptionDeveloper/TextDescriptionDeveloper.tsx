import { Box, Typography, Button } from '@mui/material'
import {
  BoxDescription,
  BoxStyled,
} from 'features/TextDescriptionDeveloper/TextDescriptionDeveloper.style'
import { DescText, NameText, PositionText } from 'pages/Home/Home.style'
import React from 'react'
import { useTranslation } from 'react-i18next'

const TextDescriptionDeveloper = () => {
  const { t } = useTranslation()

  return (
    <BoxStyled>
      <PositionText variant='h6' sx={{ color: 'secondary.main', mb: 2, fontWeight: 'bold', letterSpacing: 2, textTransform: 'uppercase' }}>
        {t('home.developer_position')}
      </PositionText>

      <NameText variant='h1' sx={{ fontWeight: 900, mb: 2, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} >
        {t('home.developer_name')}
      </NameText>

      <Typography variant='h4' sx={{ color: 'text.primary', fontWeight: 600, mb: 4, maxWidth: '800px', lineHeight: 1.3 }}>
        {t('home.developer_tagline')}
      </Typography>

      <BoxDescription sx={{ borderLeft: 0, p: 0, m: 0, maxWidth: '700px' }}>
        <DescText variant='body1' sx={{ lineHeight: 1.8, fontSize: '1.2rem', color: 'text.secondary', mb: 4 }}>
          {t('home.developer_description')}
        </DescText>
      </BoxDescription>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          size="large"
          href="#projects"
          sx={{
            fontWeight: 'bold',
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
              filter: 'brightness(1.1)',
            }
          }}
        >
          {t('home.cta_projects')}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="#contactId"
          sx={{
            fontWeight: 'bold',
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            borderWidth: 2,
            '&:hover': { borderWidth: 2 }
          }}
        >
          {t('home.cta_contact')}
        </Button>
      </Box>
    </BoxStyled>
  )
}

export default TextDescriptionDeveloper
