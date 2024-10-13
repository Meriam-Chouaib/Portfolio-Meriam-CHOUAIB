import { Box, Typography } from '@mui/material'
import {
  CustomItemStyled,
  ImageItem,
} from 'components/CustomItem/CustomItem.style'
import { CustomItemProps } from 'components/CustomItem/CustomItem.type'

function CustomItem({ description, img, title }: CustomItemProps) {
  return (
    <>
      <CustomItemStyled>
        <ImageItem src={img} />
        <Box sx={{ padding: '20px' }}>
          <Typography variant='h2'>{title}</Typography>
          <Typography variant='h3'>{description}</Typography>
        </Box>
      </CustomItemStyled>
    </>
  )
}

export default CustomItem
