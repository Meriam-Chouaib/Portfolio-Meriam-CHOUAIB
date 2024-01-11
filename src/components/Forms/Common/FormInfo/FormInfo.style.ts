import { Typography, styled } from '@mui/material';
import { ItalicInformationColors } from 'config/constant/colors.config';

export const FormInfoTypographyStyle = styled(Typography)(({ theme }) => ({
  color: ItalicInformationColors.color,
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: '0.813rem',
  fontFamily: 'Inter',
}));
