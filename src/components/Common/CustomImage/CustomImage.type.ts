import { SxProps } from '@mui/material'
import { ImageVariantsEnum } from 'config/enums/image.enum'
import { MediaSources } from 'types/models/common/MediaType/MediaType'

export interface CustomImageProps {
  src?: MediaSources
  alt: string
  height?: number | string
  width?: number | string
  clickable?: boolean
  sx?: SxProps
  imgSx?: SxProps
  imagePlaceholder?: string
  variant: ImageVariantsEnum
  skeletonVariant?: 'text' | 'rectangular' | 'rounded' | 'circular'
  onViewImage?: () => void
}

export interface CustomImageStyleProps {
  width: number | string | undefined
  height: number | string | undefined
  clickable: 1 | 0 | undefined
}
