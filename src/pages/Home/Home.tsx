import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'

import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import CustomImage from 'components/Common/Image/Image'

import { HEIGHT_SWIPER, SWIPER_ITEMS } from 'pages/Home/Home.constants'
import { EffectCards } from 'swiper/modules'

import { BoxStyled } from 'pages/Home/Home.style'
interface HomeProps {
  oldStepsRecord: StepsRecord
  onNextStep: (newStepsRecord: StepsRecord) => void
  onPreviousStep: () => void
}
function Home() {
  const { t } = useTranslation()

  return (
    <BoxStyled margin={'2rem 0rem'}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {SWIPER_ITEMS.map((swiper, index) => (
          <SwiperSlide>
            <CustomImage
              src={swiper.img}
              height={HEIGHT_SWIPER}
              width={'50%'}
              key={`swiper-library-${index}`}
              sx={{ borderRadius: '20px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </BoxStyled>
  )
}

export default Home
