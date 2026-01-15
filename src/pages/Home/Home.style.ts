import { Box, Grid, Typography, styled } from '@mui/material'

export const GridStyled = styled(Grid)(
  ({ theme }) =>
    ({ isCenter }: { isCenter?: boolean }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: isCenter ? 'center' : 'space-between',
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
  width: '450px',
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '370px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '77%',
  },
}))

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
