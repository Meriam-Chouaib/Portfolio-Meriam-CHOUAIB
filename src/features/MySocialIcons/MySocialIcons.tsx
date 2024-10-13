import { Box, IconButton, Stack } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const MySocialIcons = () => {
  const handleRedirect = (url: string) => {
    window.open(url, '_blank') // Open link in a new tab
  }

  return (
    <Box>
      <Stack direction='column' spacing={1}>
        <IconButton onClick={() => handleRedirect('https://www.linkedin.com')}>
          <LinkedInIcon color='secondary' />
        </IconButton>
        <IconButton onClick={() => handleRedirect('https://github.com')}>
          <GitHubIcon color='secondary' />
        </IconButton>
        <IconButton onClick={() => handleRedirect('https://www.facebook.com')}>
          <FacebookIcon color='secondary' />
        </IconButton>
        <IconButton onClick={() => handleRedirect('https://www.instagram.com')}>
          <InstagramIcon color='secondary' />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default MySocialIcons
