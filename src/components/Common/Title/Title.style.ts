import { Typography, styled } from '@mui/material'
import { TitleProps } from 'components/Common/Title/Title.type'
import { GlobalFonts } from 'config/constant/fonts.config'

export const TitleStyled = styled(Typography)(
  ({ theme }) =>
    ({ color, isCenter }: TitleProps) => ({
      fontSize: '3rem',
      fontFamily: GlobalFonts.FONT_PRIMARY,
      fontWeight: 600,
      padding: '1rem 0',
      lineHeight: '1.563rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: isCenter ? 'center' : '',
      color: color ? color : theme.palette.primary.main,
    })
)
