import { Stack, Typography } from '@mui/material'
import ArcChart from 'components/Charts/ArcChart/ArcChart'
import { BoxStyled } from 'pages/AboutPage/AboutPage.style'
import { useTranslation } from 'react-i18next'

function AboutPage() {
  const { t } = useTranslation()
  return (
    <BoxStyled>
      <Stack>
        <Typography variant='h1'>{t('about.chart')}</Typography>
      </Stack>
      <ArcChart />
    </BoxStyled>
  )
}

export default AboutPage
