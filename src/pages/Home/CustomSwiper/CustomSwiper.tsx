import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CustomImage from 'components/Common/Image/Image'
import { HEIGHT_SWIPER, SWIPER_ITEMS } from 'pages/Home/Home.constants'
import { EffectCards } from 'swiper/modules'

function CustomSwiper() {
  return (
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
  )
}

export default CustomSwiper
