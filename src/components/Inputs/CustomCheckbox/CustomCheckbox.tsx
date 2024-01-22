import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import CheckedRadioIcon from 'assets/icons/radio-button-checked.svg?react'
import RadioIcon from 'assets/icons/radio-check.svg?react'
import { CustomCheckboxProps } from 'components/Inputs/CustomCheckbox/CustomCheckbox.type'
import { useTranslation } from 'react-i18next'
import { generateId } from 'utils/helpers/math.helpers'

function CustomCheckbox({ label, checked, onClick }: CustomCheckboxProps) {
  const { t } = useTranslation()
  return (
    <FormControlLabel
      sx={{ paddingLeft: 0.2 }}
      control={
        <Checkbox
          sx={{ paddingTop: 0, paddingBottom: 0 }}
          disableRipple
          checkedIcon={<CheckedRadioIcon id={generateId()} />}
          icon={<RadioIcon id={generateId()} />}
          checked={checked}
          onClick={onClick}
        />
      }
      label={<Typography variant='body2'>{t(label)}</Typography>}
    />
  )
}

export default CustomCheckbox
