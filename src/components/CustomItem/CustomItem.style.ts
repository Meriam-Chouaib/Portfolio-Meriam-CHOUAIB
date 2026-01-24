import { Card, styled, Typography } from '@mui/material'

export const CustomItemStyled = styled(Card)(
  ({ theme }) =>
    ({ isExpanded }: { isExpanded?: boolean }) => ({
      backgroundColor: theme.palette.primary.contrastText,
      width: '270px',
      height: isExpanded ? 'auto' : '320px',
      borderRadius: 10,
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      padding: '30px ',
      transition: 'box-shadow 0.3s, transform 0.3s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        transform: 'scale(1.02)',
      },
    })
)

export const ImageItem = styled('img')({
  borderRadius: '15px',
  width: '100%',
  height: '160px',
  objectFit: 'cover',
})

export const VideoItem = styled('video')({
  borderRadius: '15px',

  width: '100%',
  height: 'auto',
})
export const DescriptionProject = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  width: '100%',
  height: 'auto',
}))

export const TitleProject = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '25px',
  paddingY: '8px',
}))
