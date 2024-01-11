import { Box, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { CustomTooltipProps } from 'components/Common/CustomTooltip/CustomTooltip.type'

function CustomTooltip({ text, element }: CustomTooltipProps) {
  const { t } = useTranslation()
  return (
    <Tooltip
      title={t(text)}
      arrow
      placement='bottom-start'
      enterTouchDelay={0}
      componentsProps={{
        tooltip: {
          sx: {
            '& .MuiTooltip-arrow': {
              color: 'grey.600',
              marginLeft: 0.1,
            },
          },
        },
      }}
    >
      <Box maxHeight={25}>{element}</Box>
    </Tooltip>
  )
}

export default CustomTooltip
