import { styled, Typography } from '@mui/material';
import { GlobalVariables } from 'config/constant';

type RequiredProps = {
  required?: boolean;
  valid?: string;
};
export const LabelStyle = styled(Typography)(
  ({ theme }) =>
    ({ required, valid }: RequiredProps) => ({
      color: valid === GlobalVariables.TRUE ? '' : theme.palette.error.main,
      fontSize: '0.813rem',
      lineHeight: '1.25rem',
      opacity: 0.8,
      '::after': required
        ? {
            content: '"*"',
            color: theme.palette.error.main,
          }
        : null,
    }),
);

export const ValueStyle = styled(Typography)({
  opacity: 0.3,
  minHeight: 24,
});
