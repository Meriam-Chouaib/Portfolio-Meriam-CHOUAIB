import { CustomButtonStyle } from './CustomButton.styles'
import { ClipLoader } from 'react-spinners'
import { CustomButtonProps } from './CustomButton.types'
import { Box } from '@mui/material'

export const CustomButton = ({
  isLoading,
  children,
  colorBack,
  colorText, width,
  sx,
  ...props
}: CustomButtonProps) => {
  return (
    <Box
      sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}
    >
      <CustomButtonStyle
        type='submit'
        sx={{
          color: colorText,
          backgroundColor: colorBack,
          width: width,
          ...sx
        }}
        {...props}
      >
        {isLoading ? <ClipLoader color='#ffffff' size={20} /> : children}
      </CustomButtonStyle>
    </Box>
  )
}
