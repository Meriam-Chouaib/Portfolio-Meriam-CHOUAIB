import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import CustomImage from 'components/Common/CustomImage/CustomImage'
import { InfoIconStyle } from 'components/CustomInputs/CustomInputs.style'
import CustomTooltip from 'components/Tooltips/CustomTooltip/CustomTooltip'
import { ImageVariantsEnum } from 'config/enums/image.enum'
import { isUndefined } from 'lodash'
import { useTranslation } from 'react-i18next'
import { generateArray } from 'utils/helpers/array.helpers'
import {
  BoxIconStyle,
  CheckedRadioBoxStyle,
  CheckedRadioStyle,
  RadioBoxStyle,
} from './MultiRadioButtonsGroup.style'
import { MultiRadioButtonsGroupProps } from './MultiRadioButtonsGroup.type'
import { GlobalVariables } from 'config/constant/global.variables'

export function MultiRadioButtonsGroup({
  label,
  value,
  placeholder,
  options,
  error,
  tooltipText,
  optionsConfig,
  isLoading,
  disabled,
  onChange,
}: MultiRadioButtonsGroupProps) {
  const { t } = useTranslation()

  const stringsValue = value.map((v) => v.toString())
  const handleChange = (newValue: string) => {
    if (stringsValue.includes(newValue)) {
      onChange(stringsValue.filter((item) => item !== newValue))
    } else {
      onChange([...stringsValue, newValue])
    }
  }

  return (
    <FormControl error={!!error}>
      <Stack spacing={0.1}>
        {label && (
          <Stack direction='row' spacing={0.5}>
            <Stack direction={'row'} spacing={'5px'} alignItems={'center'}>
              {label && <Typography variant='h4'>{t(label)}</Typography>}
              {tooltipText && (
                <CustomTooltip title={tooltipText} size='small'>
                  <InfoIconStyle />
                </CustomTooltip>
              )}
              {error && (
                <CustomTooltip
                  title={t(error?.message ?? GlobalVariables.EmptyString)}
                  isError
                />
              )}
            </Stack>
            {placeholder && (
              <Typography variant='h4' color='grey.500'>
                ({t(placeholder)})
              </Typography>
            )}
          </Stack>
        )}

        {isLoading && (
          <Grid container rowSpacing={optionsConfig?.itemWidth ? 2.125 : 1}>
            {generateArray(6).map((id) => (
              <Grid
                key={id}
                item
                xs={optionsConfig?.itemWidth.xs ?? 'auto'}
                md={optionsConfig?.itemWidth.md ?? 'auto'}
                lg={optionsConfig?.itemWidth.lg ?? 'auto'}
                width={150}
              >
                <Skeleton width={'60%'} height={40} />
              </Grid>
            ))}
          </Grid>
        )}

        {!isLoading && (
          <Grid container rowSpacing={optionsConfig?.itemWidth ? 2.125 : 1}>
            {options.map((option, i) => (
              <Grid
                key={`${option.label}${i}`}
                item
                xs={optionsConfig?.itemWidth.xs ?? 'auto'}
                md={optionsConfig?.itemWidth.md ?? 'auto'}
                lg={optionsConfig?.itemWidth.lg ?? 'auto'}
              >
                <FormControlLabel
                  value={option.value}
                  disabled={disabled}
                  control={
                    <Radio
                      size='small'
                      icon={<RadioBoxStyle />}
                      checkedIcon={
                        <CheckedRadioBoxStyle>
                          <CheckedRadioStyle />
                        </CheckedRadioBoxStyle>
                      }
                      checked={stringsValue.includes(option.value.toString())}
                      onClick={() => handleChange(option.value.toString())}
                      sx={{ padding: 0, margin: 1, marginLeft: 0 }}
                    />
                  }
                  label={
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                      {!isUndefined(option.image) && (
                        <BoxIconStyle
                          sx={{
                            cursor: !disabled ? 'pointer' : 'unset',
                          }}
                        >
                          <CustomImage
                            variant={ImageVariantsEnum.ICON}
                            src={option.image}
                            alt={t(option.label)}
                            width={30}
                            height={'auto'}
                            clickable={!disabled}
                            imgSx={{
                              maxHeight: 30,
                            }}
                          />
                        </BoxIconStyle>
                      )}
                      <Typography>{t(option.label)}</Typography>
                    </Stack>
                  }
                  sx={{ marginLeft: 0 }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </FormControl>
  )
}
