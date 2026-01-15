import { Box, Typography, Chip } from '@mui/material'
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

function CustomItem({ description, imgs, title, video, techStack, githubLink }: CustomItemProps) {
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
    maxLength: 150, // Increased for better readability
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

        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TitleProject variant='h2'>{t(title)}</TitleProject>

          {/* Tech Stack Chips */}
          {techStack && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
              {techStack.map((tech) => (
                <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
              ))}
            </Box>
          )}

          <DescriptionProject variant='body1' sx={{ lineHeight: 1.6 }}>
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

          {githubLink && (
            <Box sx={{ mt: 2 }}>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="button" sx={{ borderBottom: '1px solid', pb: 0.5 }}>View Source Code</Typography>
              </a>
            </Box>
          )}
        </Box>
      </CustomItemStyled>
    </>
  )
}

export default CustomItem
