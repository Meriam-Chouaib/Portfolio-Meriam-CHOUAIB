import { Skeleton, styled } from '@mui/material'
import { CustomImageStyleProps } from './CustomImage.type'

export const RootStyle = styled('img')(
  ({ width, height, clickable }: CustomImageStyleProps) =>
    () => ({
      display: 'block',
      minHeight: height,
      minWidth: width,
      maxHeight: height,
      maxWidth: width,
      height,
      width,
      cursor: clickable ? 'pointer' : 'auto',
    })
)

export const LoadingStyle = styled(Skeleton)(({ width, height }) => () => ({
  display: 'block',
  width: height,
  height: width,
}))
