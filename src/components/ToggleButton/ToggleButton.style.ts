import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

export const ToggleSwitch = styled(Switch)(({ theme }) => ({
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: '60px',
  height: '20px',
  width: '48px',
  marginRight: '1rem',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 0,
    transition: 'transform 0.3s ease-in-out',
    '&.Mui-checked': {
      transform: 'translateX(20px)', // Move to the right for checked state
      color: theme.palette.secondary.main,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.secondary.main, // Checked background color
        opacity: 1,
        border: 'none',
      },
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '& .MuiSwitch-thumb': {
    marginTop: '2px',
    marginLeft: '2px',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20, // Rounded track
    backgroundColor: theme.palette.primary.main, // Default background color
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
}))
