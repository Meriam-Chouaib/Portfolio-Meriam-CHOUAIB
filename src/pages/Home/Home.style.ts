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
  backgroundColor: theme.palette.background.paper,
  borderRadius: '26px',
  marginTop: '16px',

  [theme.breakpoints.down(860)]: { flexDirection: 'column' },
}))
export const PositionText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  fontSize: '30px',
  color: theme.palette.text.primary,
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
  paddingTop: '40px',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('md')]: {
    width: '400px',
  },
  [theme.breakpoints.down(460)]: {
    width: '307px',
  },
  [theme.breakpoints.down(365)]: {
    width: '248px',
  },
}))

export const NameText = styled(Typography)(({ theme }) => ({
  fontSize: '92px',
  paddingTop: '20px',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    fontSize: '74px',
  },
  [theme.breakpoints.down(355)]: {
    fontSize: '64px',
  },
}))
74
