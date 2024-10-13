import { Box, Typography } from '@mui/material'
import { BoxStyled } from 'features/TextDescriptionDeveloper/TextDescriptionDeveloper.style'
import { DescText, NameText, PositionText } from 'pages/Home/Home.style'
import React from 'react'
import { useTranslation } from 'react-i18next'

const TextDescriptionDeveloper = () => {
  const { t } = useTranslation()

  return (
    <BoxStyled>
      <PositionText variant='h2'>{t('home.developer_position')}</PositionText>
      <NameText variant='h1'>{t('home.developer_name')}</NameText>
      <NameText variant='h1'>{t('home.developer_LastName')}</NameText>
      <DescText variant='h3' sx={{}}>
        {t('home.developer_description')}
      </DescText>
    </BoxStyled>
  )
}

export default TextDescriptionDeveloper
