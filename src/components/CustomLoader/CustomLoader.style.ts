import { styled } from '@mui/system'
import { Box, keyframes } from '@mui/material'

export const RootStyle = styled(Box)(
  ({ size }: { size?: number | string }) =>
    ({ theme }) => ({
      color: theme.palette.primary.main,
      fontSize: size ? `${size}px` : '8px',
      width: '1em',
      height: '1em',
      borderRadius: '50%',
      position: 'relative',
      textIndent: '-9999em',
      animation: `${mulShdSpin} 1s infinite linear`,
      transform: 'translateZ(0)',
      marginBlock: 5,
    })
)

const mulShdSpin = keyframes`
0%,
100% {
  box-shadow: 0 -3em 0 0.2em, 
  2em -2em 0 0em, 3em 0 0 -1em, 
  2em 2em 0 -1em, 0 3em 0 -1em, 
  -2em 2em 0 -1em, -3em 0 0 -1em, 
  -2em -2em 0 0;
}
12.5% {
  box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
  3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
  -2em 2em 0 -1em, -3em 0 0 -1em, 
  -2em -2em 0 -1em;
}
25% {
  box-shadow: 0 -3em 0 -0.5em, 
  2em -2em 0 0, 3em 0 0 0.2em, 
  2em 2em 0 0, 0 3em 0 -1em, 
  -2em 2em 0 -1em, -3em 0 0 -1em, 
  -2em -2em 0 -1em;
}
37.5% {
  box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
   3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
   -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
}
50% {
  box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
   3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
   -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
}
62.5% {
  box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
   3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
   -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
}
75% {
  box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
  3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
  -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
}
87.5% {
  box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
  3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
  -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
}`
