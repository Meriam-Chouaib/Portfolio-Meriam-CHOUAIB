import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Shadows } from 'config/constant/colors.config'
import { GlobalFonts } from 'config/constant/fonts.config'

const typography: TypographyOptions = {
  fontFamily: GlobalFonts.FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 900,
  h1: {
    fontWeight: 700,
    fontFamily: GlobalFonts.FONT_DANCING_SCRIPT,

    lineHeight: '5rem',
    fontSize: '4.5rem',
    textShadow: Shadows.dark,
  },
  h2: {
    fontWeight: 500,
    fontFamily: GlobalFonts.FONT_CURSIVE,
    fontSize: '1.3rem',
    lineHeight: '2.188rem',
  },
  h3: {
    fontWeight: 500,
    fontFamily: GlobalFonts.FONT_PRIMARY_500,
    fontSize: '1.125rem',
    lineHeight: '1.563rem',
  },
  h4: {
    fontWeight: 500,
    fontFamily: GlobalFonts.FONT_PRIMARY_500,
    fontSize: '1rem',
    lineHeight: '1.438rem',
  },
  h5: {
    fontSize: '1rem',
    lineHeight: '1.438rem',
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontWeight: 400,
    textTransform: 'none',
  },
  h6: {
    fontWeight: 500,
    fontFamily: GlobalFonts.FONT_PRIMARY_500,
    fontSize: '1rem',
    lineHeight: '1.563rem',
  },
  body1: {
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '0.938rem',
    lineHeight: '1.313rem',
  },
  body2: {
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '0.8125rem',
    lineHeight: '1.25rem',
  },
  subtitle1: {
    fontFamily: GlobalFonts.FONT_PRIMARY_300,
    fontSize: '0.938rem',
    lineHeight: '1.438rem',
  },
  subtitle2: {
    fontWeight: 300,
    fontFamily: GlobalFonts.FONT_PRIMARY_500,
    fontSize: '0.9rem',
    lineHeight: '1rem',
  },
  button: {
    fontSize: '1rem',
    lineHeight: '1.438rem',
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontWeight: 400,
    textTransform: 'none',
  },
}

export default typography
