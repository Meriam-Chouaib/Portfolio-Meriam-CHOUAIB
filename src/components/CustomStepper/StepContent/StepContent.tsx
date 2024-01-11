import { Button, Stack } from '@mui/material'
import CustomLoadingButton from 'components/Buttons/CustomLoadingButton/CustomLoadingButton'
import { useTranslation } from 'react-i18next'
import { StepContentProps } from './StepContent.type'

function StepContent({
  children,
  disabledNext,
  isLoading,
  onNextStep,
  onPreviousStep,
  continueButton,
  hideNextButton,
  disabledNextFn,
}: StepContentProps) {
  const { t } = useTranslation()
  return (
    <Stack>
      {children}
      {!continueButton && (
        <Stack direction='row' spacing={1}>
          {onPreviousStep && (
            <Button
              variant='outlined'
              onClick={onPreviousStep}
              sx={{
                color: 'secondary.light',
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              {t('common.previous')}
            </Button>
          )}
          {!hideNextButton && (
            <CustomLoadingButton
              variant='contained'
              key={2}
              onClick={onNextStep}
              sx={{
                minWidth: { xs: 50, sm: 107 },
                width: { xs: '100%', sm: 'auto' },
                color: 'white !important',
              }}
              disabled={disabledNext}
              disabledFn={disabledNextFn && disabledNextFn}
              isLoading={isLoading}
            >
              {t('common.next_step')}
            </CustomLoadingButton>
          )}
        </Stack>
      )}
      {continueButton && (
        <Stack sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <CustomLoadingButton
            variant='contained'
            key={2}
            onClick={onNextStep}
            sx={{
              minWidth: { xs: 50, sm: 107 },
              width: { xs: '100%', sm: 'auto' },
              color: 'white !important',
            }}
            disabledFn={disabledNextFn && disabledNextFn}
            isLoading={isLoading}
          >
            {t('common.continue')}
          </CustomLoadingButton>
        </Stack>
      )}
    </Stack>
  )
}

export default StepContent
