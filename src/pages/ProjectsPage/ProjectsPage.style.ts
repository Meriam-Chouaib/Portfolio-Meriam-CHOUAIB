import { Box, styled, Typography } from '@mui/material'
import { GlobalFonts } from 'config/constant/fonts.config'

export const ProjectsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '34px',
  padding: '16px',

  margin: '0px 20px 0px',
}))
export const TextSeparator = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: '30px 0px',
  color: theme.palette.text.primary,
  fontSize: '34px',
  fontFamily: GlobalFonts.FONT_CAVEAT, //
}))

export const TextNote = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  opacity: 0.8,
  fontSize: '16px',
  fontWeight: '700',
}))

export const BoxGlobal = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))
