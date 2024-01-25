import { ImageStyled } from 'components/Common/Image/Image.style'
import { ImageProps } from 'components/Common/Image/Image.type'

function CustomImage({ src, height, width, sx }: ImageProps) {
  return <ImageStyled src={src} width={width} height={height} sx={sx} />
}

export default CustomImage
