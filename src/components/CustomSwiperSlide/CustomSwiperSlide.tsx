import { SwiperSlide } from 'swiper/react'

import CustomImage from 'components/Common/Image/Image'

import { HEIGHT_SWIPER } from 'pages/Home/Home.constants'
function CustomSwiperSlide({ img, index }: { img: string; index: number }) {
  return (
    <SwiperSlide>
      <CustomImage
        src={img}
        height={HEIGHT_SWIPER}
        width={'50%'}
        key={`swiper-library-${index}`}
        sx={{
          borderRadius: '20px',
        }}
      />
    </SwiperSlide>
  )
}
export default CustomSwiperSlide
