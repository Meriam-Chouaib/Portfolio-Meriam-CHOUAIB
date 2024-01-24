import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'

import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import CustomImage from 'components/Common/Image/Image'

import { HEIGHT_SWIPER, SWIPER_ITEMS } from 'pages/Home/Home.constants'
import { Stack } from '@mui/system'
import { EffectCards } from 'swiper/modules'

import { Box } from '@mui/material'
import CustomSwiperSlide from 'components/CustomSwiper/CustomSwiper'
interface HomeProps {
  oldStepsRecord: StepsRecord
  onNextStep: (newStepsRecord: StepsRecord) => void
  onPreviousStep: () => void
}
function Home() {
  const { t } = useTranslation()

  return (
    <Box margin={'2rem 0rem'}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
      >
        {SWIPER_ITEMS.map((swiper, index) => (
          <SwiperSlide>
            <CustomImage
              src={swiper.img}
              height={HEIGHT_SWIPER}
              width={'50%'}
              key={`swiper-library-${index}`}
            />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </Box>
  )
}

export default Home
