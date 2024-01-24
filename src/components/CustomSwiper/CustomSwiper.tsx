import CustomImage from 'components/Common/Image/Image'
import { SwiperSlideStyled } from 'components/CustomSwiper/CustomSwiper.style'

function CustomSwiperSlide({
  img,
  height,
  key,
  width,
}: {
  img?: string
  height?: string
  key?: string
  width?: string
}) {
  return (
    <SwiperSlideStyled>
      <CustomImage src={img} height={height} width={width} key={key} />
    </SwiperSlideStyled>
  )
}

export default CustomSwiperSlide
