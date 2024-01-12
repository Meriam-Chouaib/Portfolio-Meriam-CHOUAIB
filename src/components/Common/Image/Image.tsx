import { ImageStyled } from 'components/Common/Image/Image.style'
import { ImageProps } from 'components/Common/Image/Image.type'

function CustomImage({ src, height, width }: ImageProps) {
  return <ImageStyled src={src} width={width} height={height} />
}

export default CustomImage
