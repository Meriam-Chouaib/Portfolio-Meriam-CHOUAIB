import { Box, Container, Typography, useTheme } from '@mui/material'

function Footer() {
  const theme = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        py: 3,
        borderTop: `1px solid ${theme.palette.divider}`,
        width: '100%',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            © {currentYear} Meriam Chouaib. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
