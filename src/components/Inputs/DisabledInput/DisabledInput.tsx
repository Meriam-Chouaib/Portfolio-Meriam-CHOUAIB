import { Stack } from '@mui/material';
import { GlobalVariables } from 'config/constant';
import { useTranslation } from 'react-i18next';
import { LabelStyle, ValueStyle } from './DisabledInput.style';

interface DisabledInputProps {
  label: string;
  value: string;
  isValid: boolean;
  required?: boolean;
}

function DisabledInput({ label, value, isValid, required }: DisabledInputProps) {
  const { t } = useTranslation();
  return (
    <Stack width="100%" spacing={0}>
      <LabelStyle
        required={required}
        valid={isValid ? GlobalVariables.TRUE : GlobalVariables.FALSE}
      >
        {t(label)}
      </LabelStyle>
      <ValueStyle>{value}</ValueStyle>
    </Stack>
  );
}

export default DisabledInput;
