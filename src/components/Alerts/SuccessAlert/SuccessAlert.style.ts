import { Box, Stack, styled, Typography } from '@mui/material';
import { GlobalFonts } from 'config/constant/fonts.config';

export const RootStyle = styled(Stack)(({ theme }) => ({
  color: theme.palette.success.main,
  backgroundColor: theme.palette.success.light,
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 24,
  paddingRight: 24,
  borderRadius: 8,
}));

export const CheckedCircleStyle = styled(Box)(({ theme }) => ({
  height: 24,
  width: 24,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  color: theme.palette.grey[50],
}));

export const MessageStyle = styled(Typography)(() => ({
  fontFamily: GlobalFonts.FONT_PRIMARY,
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '1.5rem',
}));
