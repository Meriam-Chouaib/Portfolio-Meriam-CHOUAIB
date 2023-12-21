import { Box, Stack } from '@mui/material'
import NoImageFound from 'assets/images/NoImageFound.png'
import { SyntheticEvent, useMemo, useState } from 'react'

import { GlobalVariables } from 'config/constant/global.variables'
import { CustomImageProps } from 'components/Common/CustomImage/CustomImage.type'
import { VariantsArray } from 'components/Common/CustomImage/CustomImage.constants'
import { getMediaSource } from 'components/Common/CustomImage/CustomImage.helper'
import {
  LoadingStyle,
  RootStyle,
} from 'components/Common/CustomImage/CustomImage.style'

function CustomImage({
  src,
  alt,
  height,
  width,
  clickable,
  sx,
  imgSx,
  imagePlaceholder,
  variant,
  skeletonVariant,
  onViewImage,
}: Readonly<CustomImageProps>) {
  const variantIndex = VariantsArray.indexOf(variant)
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const source = useMemo(
    () => getMediaSource(src, VariantsArray[variantIndex]),
    [src]
  )
  const initialSrc = useMemo(
    () => (loaded ? source : src?.thumbnail),
    [src, loaded]
  )

  const onImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = imagePlaceholder ?? NoImageFound
    event.currentTarget.alt = GlobalVariables.EmptyString
  }

  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <RootStyle
        src={initialSrc || (imagePlaceholder ?? NoImageFound)}
        alt={alt}
        height={thumbnailLoaded ? height : '0px'}
        width={thumbnailLoaded ? width : '0px'}
        loading='lazy'
        onLoad={() => setThumbnailLoaded(true)}
        onError={onImageError}
        onClick={onViewImage}
        clickable={clickable ? 1 : 0}
        sx={imgSx}
      />
      <img
        src={source}
        onLoad={() => setLoaded(true)}
        style={{ visibility: 'hidden', display: 'none' }}
      />
      {thumbnailLoaded ? null : (
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
          height={'100%'}
        >
          <LoadingStyle
            sx={{ ...sx, borderRadius: skeletonVariant ? undefined : '5px' }}
            width={width}
            height={height}
            variant={skeletonVariant ?? 'rectangular'}
          />
        </Stack>
      )}
    </Box>
  )
}

export default CustomImage
