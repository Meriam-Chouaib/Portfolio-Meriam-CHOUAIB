import { Box } from '@mui/material'
import { GlobalVariables } from 'config/constant/global.variables'

const Required = () => {
  return (
    <Box component={'span'} color='primary.main'>
      {GlobalVariables.RequiredSymbol}
    </Box>
  )
}

export default Required
