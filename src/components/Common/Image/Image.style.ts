import { styled } from '@mui/material'
import { ImageProps } from 'components/Common/Image/Image.type'

export const ImageStyled = styled('img')(({ height, width }: ImageProps) => ({
  height: height,
  width: width,
  objectFit: 'cover',
}))
