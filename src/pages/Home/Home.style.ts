import { Box, Grid, Typography, styled } from '@mui/material'

export const GridStyled = styled(Grid)(
  ({ theme }) =>
    ({ isCenter }: { isCenter?: boolean }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: isCenter ? 'center' : 'end',
      [theme.breakpoints.down(860)]: {
        flexDirection: isCenter ? 'row' : 'column',
      },
      [theme.breakpoints.down(500)]: {
        justifyContent: isCenter ? '  flex-start ' : '',
      },
    })
)
export const BoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: '50px 50px 0px 0px',

  marginTop: '16px',

  [theme.breakpoints.down(860)]: { flexDirection: 'column' },
}))
export const PositionText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  fontWeight: 600,
  letterSpacing: '2px',
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  marginBottom: '8px',
}))

export const ImgDeveloper = styled('img')(({ theme }) => ({
  width: '380px',
  height: '380px',
  borderRadius: '24px',
  objectFit: 'cover',
  objectPosition: 'top center',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 20px 60px rgba(0, 0, 0, 0.4)'
    : '0 15px 40px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)'}`,

  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 25px 70px rgba(0, 0, 0, 0.5)'
      : '0 20px 50px rgba(0, 0, 0, 0.15)',
  },

  [theme.breakpoints.down('md')]: {
    width: '320px',
    height: '320px',
    borderRadius: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '280px',
    height: '280px',
    borderRadius: '16px',
    margin: '0 auto',
    display: 'block',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

export const GradientBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: `linear-gradient(135deg, 
    ${theme.palette.secondary.main}20 0%, 
    ${theme.palette.primary.main}20 100%
  )`,
  borderRadius: '30px',
  filter: 'blur(40px)',
  opacity: 0.6,
  zIndex: 0,
}));

export const DecorativeBorder = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '420px',
  height: '420px',
  border: `2px dashed ${theme.palette.secondary.main}30`,
  borderRadius: '30px',
  zIndex: 0,

  [theme.breakpoints.down('md')]: {
    width: '350px',
    height: '350px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '300px',
    height: '300px',
  },
}));

export const AccentGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: -10,
  right: 40,
  width: '80px',
  height: '80px',
  background: `linear-gradient(135deg, 
    ${theme.palette.secondary.main}, 
    ${theme.palette.primary.main}
  )`,
  borderRadius: '50%',
  zIndex: 1,
  opacity: 0.8,
  filter: 'blur(20px)',

  [theme.breakpoints.down('sm')]: {
    right: '10%',
    width: '60px',
    height: '60px',
  },
}));

// Alternative: Professional Circular Image
export const ProfessionalCircularImage = styled('img')(({ theme }) => ({
  width: '350px',
  height: '350px',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
  border: `4px solid ${theme.palette.background.paper}`,
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',

  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },

  [theme.breakpoints.down('md')]: {
    width: '280px',
    height: '280px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '240px',
    height: '240px',
  },
}));

export const DescText = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',

  color: theme.palette.text.secondary,

  [theme.breakpoints.down('md')]: {
    width: '400px', // Consider removing fixed widths, but keeping for now to avoid layout break
  },
  [theme.breakpoints.down(460)]: {
    width: '100%',
  },
  [theme.breakpoints.down(365)]: {
    width: '100%',
  },
}))

export const NameText = styled(Typography)(({ theme }) => ({
  fontSize: '60px',
  fontWeight: 800,
  lineHeight: 1.1,
  paddingTop: '10px',
  paddingBottom: '20px',
  background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
  },
  [theme.breakpoints.down(355)]: {
    fontSize: '36px',
  },
}))

export const BoxGlobal = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  width: '100%',
  overflowX: 'hidden',
}))
