import { SuccessObject } from 'config/constant/alert.config'
import { useAppDispatch } from 'redux/hooks'
import { pushAlert } from 'redux/slices/alerts/alerts'
import { openLinkPreview } from 'redux/slices/alerts/previewLinkSlice'

export default function useSuccessAlert() {
  const dispatch = useAppDispatch()

  const showSuccess = (title = 'common.done', message?: string) => {
    dispatch(
      pushAlert({
        ...SuccessObject,
        title,
        message: message ?? '',
      })
    )
  }

  const showUrlPreview = (url?: string) => {
    dispatch(openLinkPreview(url ?? null))
  }

  return { showSuccess, showUrlPreview }
}
