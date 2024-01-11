import { styled, Typography } from '@mui/material';
import { GlobalFonts } from 'config/constant/fonts.config';

export const TitleStyle = styled(Typography)(({ theme }) => ({
  font: GlobalFonts.FONT_PRIMARY_600,
  fontWeight: 600,
  fontSize: '1.5rem',
  color: theme.palette.grey[500],
}));

export const DescriptionStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: '1rem',
  lineHeight: '1.5rem',
  marginBottom: 24,
  margin: 0,
}));

export const ActionStyle = styled(Typography)(({ theme }) => ({
  font: GlobalFonts.FONT_PRIMARY_600,
  color: theme.palette.grey[500],
}));
