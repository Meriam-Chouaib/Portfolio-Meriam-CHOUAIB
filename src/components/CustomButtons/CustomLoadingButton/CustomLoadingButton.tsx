import {
  LoadingButtonStyle,
  TextButtonStyle,
} from 'components/CustomButtons/CustomLoadingButton/CustomLoadingButton.style'
import { AuthCustomLoadingButtonProps } from 'components/CustomButtons/CustomLoadingButton/CustomLoadingButton.type'
import CustomLoader from 'components/CustomLoader/CustomLoader'

function CustomLoadingButton({
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

export default CustomLoadingButton
