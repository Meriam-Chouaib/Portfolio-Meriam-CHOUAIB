import { GlobalVariables } from 'config/constant/global.variables'
import { ImageVariantsEnum } from 'config/enums/image.enum'
import { isUndefined } from 'lodash'
import { MediaSources } from 'types/models/common/MediaType/MediaType'

export const getMediaSource = (
  src: MediaSources | undefined,
  variant: ImageVariantsEnum
) => {
  if (isUndefined(src)) return undefined

  const result = src[variant]

  if (
    isUndefined(result) ||
    result === null ||
    result === GlobalVariables.EmptyString
  ) {
    return (
      src.thumbnail ??
      src.icon ??
      src.small ??
      src.small ??
      src.medium ??
      src.large ??
      src.original
    )
  } else return result
}
