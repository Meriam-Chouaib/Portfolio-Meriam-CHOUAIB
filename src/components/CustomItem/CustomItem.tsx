import { Box, Typography, Chip, Button } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
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

function CustomItem({ description, imgs, title, video, techStack, githubLink, externalVideoLink, onCardClick }: CustomItemProps) {
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
  const toggleDescription = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }
  return (
    <>
      <CustomItemStyled isExpanded={isExpanded} onClick={onCardClick}>
        {externalVideoLink ? (
          <iframe
            src={externalVideoLink}
            width="100%"
            height="160"
            style={{ borderRadius: '15px', border: 'none' }}
            allowFullScreen
            title={title}
          />
        ) : video ? (
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
                <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ color: "#dee7e5ff", borderColor: "#dee7e5ff" }} />
              ))}
            </Box>
          )}




        </Box>
      </CustomItemStyled>
    </>
  )
}

export default CustomItem
