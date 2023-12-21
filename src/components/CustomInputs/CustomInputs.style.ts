import { ReactComponent as InfoIcon } from 'assets/icons/info.svg'
import { styled } from '@mui/material'

export const InfoIconStyle = styled(InfoIcon)(({ theme }) => ({
  fill: theme.palette.grey[400],
}))
