import { Swiper } from 'swiper/react'

import { EffectCards } from 'swiper/modules'
import CustomSwiperSlide from 'components/CustomSwiperSlide/CustomSwiperSlide'
import { ISwiperItem } from 'components/CustomSwiper/Custom!swiper.type'
function CustomSwiper({ SWIPER_ITEMS }: { SWIPER_ITEMS: ISwiperItem[] }) {
  return (
    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
      {SWIPER_ITEMS.map((swiper, index) => (
        <CustomSwiperSlide img={swiper.img} index={index}></CustomSwiperSlide>
      ))}
    </Swiper>
  )
}

export default CustomSwiper
