import { useTranslation } from 'react-i18next'
import { Box, Stack, Link } from '@mui/material'
import {
  AlertIconStyle,
  LinkMessageStyle,
  LinkStyle,
  MessageStyle,
  RootStyle,
} from 'components/Alerts/InfoAlert/InfoAlert.style'
import InfoTooltip from 'components/Forms/Common/InfoTooltip/InfoTooltip'
import { generateId } from 'utils/helpers/math.helpers'
import LinkObject from 'types/interfaces/LinkObject'

interface InfoAlertProps {
  message: string
  messageTip?: string
  backgroundColor?: string
  link?: LinkObject
  preLinkMessage?: string
  postLinkMessage?: string
  iconColor?: string
  messageColor?: string
}

function InfoAlert({
  message,
  messageTip,
  link,
  postLinkMessage,
  preLinkMessage,
  backgroundColor,
  iconColor,
  messageColor,
}: Readonly<InfoAlertProps>) {
  const { t } = useTranslation()
  return (
    <RootStyle
      direction='row'
      justifyContent='space-between'
      backgroundcolor={backgroundColor}
    >
      <Stack direction='row' spacing={1}>
        <Box sx={{ height: 25 }}>
          <AlertIconStyle color={iconColor} id={generateId()} />
        </Box>
        {link ? (
          <Stack direction={'row'} spacing={0.5}>
            <LinkMessageStyle>
              {preLinkMessage && t(preLinkMessage)}
            </LinkMessageStyle>
            <LinkStyle href={link.href}>{link?.label}</LinkStyle>
            <LinkMessageStyle>
              {postLinkMessage && t(postLinkMessage)}
            </LinkMessageStyle>
          </Stack>
        ) : (
          <MessageStyle color={messageColor}>{t(message)}</MessageStyle>
        )}
      </Stack>
      {messageTip && <InfoTooltip text={t(messageTip)} color='#2E5AAC' />}
    </RootStyle>
  )
}

export default InfoAlert
