import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'

import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import CustomImage from 'components/Common/Image/Image'

import { HEIGHT_SWIPER, SWIPER_ITEMS } from 'pages/Home/Home.constants'
import { EffectCards } from 'swiper/modules'
import { Box, Typography } from '@mui/material'
import { BoxStyled } from 'pages/Home/Home.style'
import BoxCenter from 'components/Common/BoxCenter/BoxCenter'
import CustomSwiper from 'pages/Home/CustomSwiper/CustomSwiper'
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
