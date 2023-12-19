import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        height: '40px',
        bottom: 0,
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Typography variant='h3'>test</Typography>
    </Box>
  )
}

export default Footer
