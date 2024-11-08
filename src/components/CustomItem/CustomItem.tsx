import { Box, Typography } from '@mui/material'
import {
  CustomItemStyled,
  DescriptionProject,
  ImageItem,
  TitleProject,
  VideoItem,
} from 'components/CustomItem/CustomItem.style'
import { CustomItemProps } from 'components/CustomItem/CustomItem.type'
import useVideo from 'hooks/useVideo'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { truncateText } from 'utils/helpers/textHelper'

function CustomItem({ description, imgs, title, video }: CustomItemProps) {
  const { t } = useTranslation()
  const {
    videoRef,
    isEnlarged,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  } = useVideo()
  const [isExpanded, setIsExpanded] = useState(false)
  const translatedDescription = t(description)

  // Get truncated text and its status
  const { truncated, isTruncated } = truncateText({
    text: translatedDescription,
    maxLength: 100,
  })
  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <>
      <CustomItemStyled isExpanded={isExpanded}>
        {video ? (
          <VideoItem
            ref={videoRef}
            src={video}
            autoPlay={true}
            muted
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
        ) : Array.isArray(imgs) ? (
          imgs.map((item, index) => <ImageItem key={index} src={item} />)
        ) : (
          <ImageItem src={imgs} />
        )}

        <Box>
          <TitleProject variant='h2'>{t(title)}</TitleProject>
          <DescriptionProject variant='h3'>
            {isExpanded || !isTruncated ? translatedDescription : truncated}
          </DescriptionProject>
          {isTruncated && (
            <Typography
              paddingY={1}
              variant='body2'
              style={{ cursor: 'pointer', color: 'gray' }}
              onClick={toggleDescription}
            >
              {isExpanded ? 'Show Less' : 'Show More...'}
            </Typography>
          )}
        </Box>
      </CustomItemStyled>
    </>
  )
}

export default CustomItem
