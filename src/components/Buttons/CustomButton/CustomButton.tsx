import { CustomButtonStyle } from './CustomButton.styles'
import { ClipLoader } from 'react-spinners'
import { CustomButtonProps } from './CustomButton.types'
import { Box } from '@mui/material'

export const CustomButton = ({
  isLoading,
  children,
  onClick,
  colorBack,
  colorText,
}: CustomButtonProps) => {
  return (
    <Box
      sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}
    >
      <CustomButtonStyle
        onClick={onClick}
        type='submit'
        sx={{ color: `${colorText}`, backgroundColor: `${colorBack}` }}
      >
        {isLoading ? <ClipLoader color='#ffffff' size={20} /> : children}
      </CustomButtonStyle>
    </Box>
  )
}
