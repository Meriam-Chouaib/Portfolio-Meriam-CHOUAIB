import { styled } from '@mui/material'
import { ReactComponent as InfoIcon } from 'assets/icons/info.svg'

export const InfoIconStyle = styled(InfoIcon)(({ theme }) => ({
  fill: theme.palette.grey[400],
}))
