import { Stack } from '@mui/material'
import { RootStyle } from './CustomLoader.style'

const CustomLoader = ({
  minHeight,
  size,
}: {
  minHeight?: number | string
  size?: number
}) => {
  return (
    <Stack
      minHeight={minHeight}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <RootStyle size={size} />
    </Stack>
  )
}

export default CustomLoader
