import { Button, Stack, Typography } from '@mui/material'
import {
  InfoIconStyle,
  RootStyle,
} from 'components/Common/ErrorComponent/ErrorComponent.style'
import { ErrorComponentProps } from 'components/Common/ErrorComponent/ErrorComponent.type'
import { useTranslation } from 'react-i18next'

function ErrorComponent({
  error,
  isRefreshable,
  onRetry,
}: ErrorComponentProps) {
  const { t } = useTranslation()

  const onRefresh = () => {
    window.location.reload()
  }
  return (
    <RootStyle justifyContent='center' alignItems='center' spacing={3}>
      <InfoIconStyle />
      <Typography variant='h2'>
        {t(error?.title || 'error.SWH_title')}
      </Typography>
      <Typography>{t(error?.message || 'error.SWH')}</Typography>
      <Stack direction='row' spacing={2}>
        {onRetry && (
          <Button variant='contained' color='secondary' onClick={onRetry}>
            {t('common.try_again')}
          </Button>
        )}
        {isRefreshable && (
          <Button variant='outlined' color='secondary' onClick={onRefresh}>
            {t('common.refresh')}
          </Button>
        )}
      </Stack>
    </RootStyle>
  )
}

export default ErrorComponent
