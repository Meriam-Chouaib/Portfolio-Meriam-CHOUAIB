import { Stack, Tooltip, Typography } from '@mui/material'
import { InfoSvgContainer } from 'components/Containers/InfoSvgContainer/InfoSvgContainer'
import { CustomTooltipProps } from 'components/Tooltips/CustomTooltip/CustomTooltip.type'
import { ErrorIcon } from 'components/Tooltips/CustomTooltip/ErrorIcon/ErrorIcon'
import TooltipIcon from 'components/Tooltips/CustomTooltip/TooltipIcon/TooltipIcon'
import { GlobalFonts } from 'config/constant/fonts.config'
import { useTranslation } from 'react-i18next'

function CustomTooltip({
  title,
  subTitle,
  children,
  placement,
  arrow,
  isError,
  size,
  open,
}: CustomTooltipProps) {
  const { t } = useTranslation()

  const isSmall = size === 'small' || !children

  return (
    <Tooltip
      open={open}
      title={
        typeof title === 'string' ? (
          <Stack
            alignItems={'center'}
            padding={'8px 15px'}
            justifyContent={'center'}
          >
            <Typography
              fontSize={isSmall ? '0.8125rem' : undefined}
              fontFamily={isSmall ? GlobalFonts.FONT_PRIMARY_300 : undefined}
              lineHeight={isSmall ? 0.875 : undefined}
            >
              {t(title)}
            </Typography>
            {subTitle && (
              <Typography
                fontSize='1rem'
                fontFamily={GlobalFonts.FONT_PRIMARY_500}
              >
                {subTitle}
              </Typography>
            )}
          </Stack>
        ) : (
          title
        )
      }
      arrow={arrow ?? true}
      placement={placement ?? 'top'}
    >
      {children ?? (
        <Stack>
          {!isError ? (
            <InfoSvgContainer>
              <TooltipIcon />
            </InfoSvgContainer>
          ) : (
            <ErrorIcon />
          )}
        </Stack>
      )}
    </Tooltip>
  )
}

export default CustomTooltip
