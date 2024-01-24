import { Box, styled, Typography } from '@mui/material'
import DeleteIcon from 'assets/icons/trash.svg?react'
import UploadIcon from 'assets/icons/upload_icon.svg?react'
import PDFIcon from 'assets/icons/pdf_icon.svg?react'
import { GlobalFonts } from 'config/constant/fonts.config'

export const HiddenInput = styled('input')(() => ({
  display: 'none',
}))

export const DeleteIconStyle = styled(DeleteIcon)(({ theme }) => ({
  cursor: 'pointer',
  path: {
    fill: theme.palette.secondary.light,
  },
}))

export const UploadIconStyle = styled(UploadIcon)(({ theme }) => ({
  cursor: 'pointer',
  path: {
    fill: theme.palette.primary.main,
  },
}))

export const PDFIconStyle = styled(PDFIcon)(({ theme }) => ({
  width: '40px',
  height: '40px',
  path: {
    fill: theme.palette.primary.main,
  },
}))

export const FileBoxStyle = styled(Box)(() => ({
  backgroundColor: '#EBEEF2',
  minWidth: '200px',
  height: '100%',
  padding: '6px 12px',
  borderRadius: 6,
}))

export const FileNameStyle = styled(Typography)(() => ({
  maxWidth: 90,
  fontFamily: GlobalFonts.FONT_PRIMARY_600,
  fontSize: '0.813rem',
  lineHeight: '1.25rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}))

export const FileSizeStyle = styled(Typography)(() => ({
  fontFamily: GlobalFonts.FONT_PRIMARY,
  fontSize: '0.688rem',
  lineHeight: '1rem',
}))

export const FileLabelStyle = styled(Typography)(() => ({
  width: '100%',
  textAlign: 'center',
}))
