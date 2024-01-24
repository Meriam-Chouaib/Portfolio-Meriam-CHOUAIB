import { Box, Stack, Typography } from '@mui/material'

import { useTranslation } from 'react-i18next'
import InfoTooltip from '../Common/InfoTooltip/InfoTooltip'
import { InterrogativeQuestionProps } from 'components/Forms/InterrogativeQuestion/InterrogativeQuestion.type'
import CustomCheckbox from 'components/Inputs/CustomCheckbox/CustomCheckbox'
import InfoAlert from 'components/Alerts/InfoAlert/InfoAlert'

function InterrogativeQuestion({
  text,
  options,
  value,
  onSelect,
  description,
  alert,
}: InterrogativeQuestionProps) {
  const { t } = useTranslation()
  return (
    <Stack spacing={1}>
      <Stack direction='row' spacing={1}>
        <Typography>{t(text)}</Typography>
        {description && (
          <Box>
            <InfoTooltip text={description} />
          </Box>
        )}
      </Stack>
      <Stack direction='row'>
        {options.map((option) => (
          <CustomCheckbox
            key={option.value}
            label={option.label}
            checked={value === option.value}
            onClick={() => onSelect(option.value)}
          />
        ))}
      </Stack>
      {alert && alert.active && (
        <InfoAlert
          message={alert.message}
          messageTip={alert.description}
          link={alert.link}
          postLinkMessage={alert.postLinkMessage}
          preLinkMessage={alert.preLinkMessage}
          backgroundColor={alert.backgroundColor}
          messageColor={alert.messageColor}
          iconColor={alert.iconColor}
        />
      )}
    </Stack>
  )
}

export default InterrogativeQuestion
