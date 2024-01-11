import { Box, Divider, Stack } from '@mui/material';
import { ExtraColors } from 'config/constant/colors.config';
import { FormCardProps } from './FormsGroupCard.type';

function FormsGroupCard({ children, showDivider }: FormCardProps) {
  return (
    <Stack spacing={4}>
      {children}
      {!showDivider && (
        <Box paddingBottom={'40px'}>
          <Divider sx={{ backgroundColor: ExtraColors.borderColor }} />
        </Box>
      )}
    </Stack>
  );
}

export default FormsGroupCard;
