import { Button, CircularProgress } from '@mui/material';
import { CustomLoadingButtonProps } from './CustomLoadingButton.type';

function CustomLoadingButton({
  isLoading,
  disabled,
  variant,
  fullWidth,
  sx,
  children,
  onClick,
  disabledFn,
}: CustomLoadingButtonProps) {
  return (
    <Button
      disabled={disabled || isLoading || (disabledFn && disabledFn())}
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={sx}
    >
      {isLoading ? <CircularProgress size={20} color={'secondary'} thickness={5} /> : children}
    </Button>
  );
}

export default CustomLoadingButton;
