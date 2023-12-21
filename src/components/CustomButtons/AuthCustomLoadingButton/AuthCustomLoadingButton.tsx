import CustomLoader from 'components/CustomLoader/CustomLoader'
import {
  LoadingButtonStyle,
  TextButtonStyle,
} from './AuthCustomLoadingButton.style'
import { AuthCustomLoadingButtonProps } from './AuthCustomLoadingButton.type'

function AuthCustomLoadingButton({
  isLoading,
  fullWidth,
  sx,
  children,
  disabled,
  size,
  variant,
  startIcon,
  type,
  onClick,
}: AuthCustomLoadingButtonProps) {
  return (
    <LoadingButtonStyle
      loading={isLoading}
      variant={variant ?? 'contained'}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={sx}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      type={type}
      loadingIndicator={<CustomLoader size={5} />}
    >
      <TextButtonStyle>{children}</TextButtonStyle>
    </LoadingButtonStyle>
  )
}

export default AuthCustomLoadingButton
