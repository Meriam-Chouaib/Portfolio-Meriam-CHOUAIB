import { Card, styled, Typography } from '@mui/material'

export const CustomItemStyled = styled(Card)(
  ({ theme }) =>
    ({ isExpanded }: { isExpanded?: boolean }) => ({
      backgroundColor: theme.palette.background.default,
      width: '270px',
      height: isExpanded ? 'auto' : '320px',
      borderRadius: 10,
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      padding: '15px ',
      transition: 'box-shadow 0.3s',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
    })
)

export const ImageItem = styled('img')({
  borderRadius: '15px',
  width: '100%',
  height: '160px',
  objectFit: 'cover',
})

export const VideoItem = styled('video')(
  ({ isEnlarged }: { isEnlarged: boolean }) => ({
    borderRadius: '15px',

    width: '100%',
    height: 'auto',
  })
)
export const DescriptionProject = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  width: '100%',
  height: 'auto',
}))
