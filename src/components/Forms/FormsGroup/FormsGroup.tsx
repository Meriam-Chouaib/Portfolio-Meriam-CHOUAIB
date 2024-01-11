import { Button, Stack } from '@mui/material'
import { Box } from '@mui/system'
import FormsGroupCard from 'components/Cards/FormsGroupCard/FormsGroupCard'
import CustomLink from 'components/CustomLink/CustomLink'
import { useTranslation } from 'react-i18next'
import InfoTooltip from '../Common/InfoTooltip/InfoTooltip'
import { ActionStyle, DescriptionStyle, TitleStyle } from './FormsGroup.style'
import { FormsGroupProps } from './FormsGroup.type'

function FormsGroup({
  title,
  titleTip,
  children,
  descriptions,
  link,
  action,
  withNoDivider,
  onEnable,
}: FormsGroupProps) {
  const { t } = useTranslation()

  return (
    <FormsGroupCard showDivider={withNoDivider}>
      <Stack spacing={3} marginTop={title ? 0 : -2}>
        {title && (
          <Stack direction='row' spacing={1}>
            <TitleStyle>
              {title}
              {onEnable && (
                <Button
                  variant='text'
                  size={'small'}
                  onClick={onEnable}
                  sx={{ marginLeft: 2 }}
                >
                  {t('common.edit_infos')}
                </Button>
              )}
            </TitleStyle>
            {titleTip && <InfoTooltip text={titleTip} />}
          </Stack>
        )}
        {descriptions && (
          <Box>
            {descriptions.map((desc, index) => (
              <DescriptionStyle key={index} variant='body2'>
                {desc}
              </DescriptionStyle>
            ))}
          </Box>
        )}
        {link && (
          <Box sx={{ lineHeight: 0 }}>
            <CustomLink link={link} />
          </Box>
        )}
        {action && <ActionStyle>{action}</ActionStyle>}
        {children}
      </Stack>
    </FormsGroupCard>
  )
}

export default FormsGroup
