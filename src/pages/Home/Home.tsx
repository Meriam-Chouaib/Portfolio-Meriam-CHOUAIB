import { useTranslation } from 'react-i18next'

import { StepsRecord } from 'pages/SignupPage/SignupPage.type'

import { Box, Typography } from '@mui/material'
import { BoxStyled } from 'pages/Home/Home.style'
import BoxCenter from 'components/Common/BoxCenter/BoxCenter'
import CustomSwiper from 'pages/Home/CustomSwiper/CustomSwiper'
import PieActiveArc from 'components/Charts/ArcChart/ArcChart'
interface HomeProps {
  oldStepsRecord: StepsRecord
  onNextStep: (newStepsRecord: StepsRecord) => void
  onPreviousStep: () => void
}
function Home() {
  const { t } = useTranslation()

  return (
    <BoxCenter>
      <BoxStyled margin={'2rem 0rem'}>
        <CustomSwiper />
        <Box>
          <Typography variant='h1'>{t('home.name')}</Typography>
        </Box>
      </BoxStyled>
    </BoxCenter>
  )
}
export default Home
