import { SxProps } from '@mui/material';
import { MouseEvent } from 'react';

export interface CustomLoadingButtonProps {
  isLoading?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  disabledFn?: () => boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  sx?: SxProps;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}
