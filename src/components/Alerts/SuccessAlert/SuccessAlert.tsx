import { Box, Stack } from '@mui/material'
import CheckCircle from 'assets/icons/check_circle.svg?react'
import { useTranslation } from 'react-i18next'
import { generateId } from 'utils/helpers/math.helpers'
import { MessageStyle, RootStyle } from './SuccessAlert.style'
interface InfoAlertProps {
  message: string
  messageTip?: string
}

function SuccessAlert({ message }: InfoAlertProps) {
  const { t } = useTranslation()
  return (
    <RootStyle direction='row' justifyContent='space-between'>
      <Stack direction='row' spacing={1}>
        <Box sx={{ height: 25 }}>
          <CheckCircle id={generateId()} />
        </Box>
        <MessageStyle>{t(message)}</MessageStyle>
      </Stack>
    </RootStyle>
  )
}

export default SuccessAlert
