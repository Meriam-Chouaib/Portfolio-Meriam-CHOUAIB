import { styled } from '@mui/material'
import InfoIcon from 'assets/icons/info.svg?react'

export const InfoIconStyle = styled(InfoIcon)(
  ({ color }: { color?: string }) => ({
    g: {
      rect: {
        fill: color ? color : '#858C94',
      },
    },
  })
)
