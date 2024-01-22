import { Link, Stack, styled, Typography } from '@mui/material'
import { GlobalFonts } from 'config/constant/fonts.config'
import AlertIcon from 'assets/icons/error.svg?react'
import { ColorsConfig } from 'config/constant/colors.config'

export const RootStyle = styled(Stack)(
  ({ backgroundcolor }: { backgroundcolor?: string }) =>
    ({ theme }) => ({
      color: theme.palette.info.main,
      backgroundColor: backgroundcolor
        ? backgroundcolor
        : theme.palette.info.light,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 24,
      paddingRight: 24,
      borderRadius: 8,
    })
)

export const MessageStyle = styled(Typography)(
  ({ color }: { color?: string }) => ({
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: color ? color : ColorsConfig.primary.main,
  })
)

export const LinkMessageStyle = styled(Typography)(() => ({
  fontFamily: GlobalFonts.FONT_PRIMARY,
  fontWeight: 400,
  fontSize: '0.9rem',
  lineHeight: '1.5rem',
}))

export const LinkStyle = styled(Link)(() => ({
  fontFamily: GlobalFonts.FONT_PRIMARY,
  fontWeight: 400,
  fontSize: '0.9rem',
  lineHeight: '1.5rem',
}))

export const AlertIconStyle = styled(AlertIcon)(
  ({ color }: { color?: string }) =>
    ({ theme }) => ({
      g: {
        rect: {
          fill: color ? ColorsConfig.warning.dark : theme.palette.primary.main,
        },
      },
    })
)
