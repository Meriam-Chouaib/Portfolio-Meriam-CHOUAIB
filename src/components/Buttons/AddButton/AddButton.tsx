import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { generateId } from 'utils/helpers/math.helpers';
import { AddCircleStyle, AddFileStyle } from './AddButton.style';
import { AddButtonProps } from './AddButton.type';

function AddButton({ label, onClick }: AddButtonProps) {
  const { t } = useTranslation();
  return (
    <AddFileStyle onClick={onClick} direction="row" spacing={1}>
      <AddCircleStyle id={generateId()} />
      <Typography color="primary">{t(label)}</Typography>
    </AddFileStyle>
  );
}

export default AddButton;
