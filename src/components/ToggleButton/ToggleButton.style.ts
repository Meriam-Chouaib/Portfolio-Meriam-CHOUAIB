import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

export const ToggleSwitch = styled(Switch)(({ theme }) => ({
  border: `2px solid #6db5a2`,
  borderRadius: '60px',
  height: '20px',
  width: '48px',
  marginRight: '1rem',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 0,
    color: '#6db5a2',
    transition: 'transform 0.3s ease-in-out',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#6db5a2',
      '& + .MuiSwitch-track': {
        backgroundColor: '#6db5a2', // Checked background color
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
    backgroundColor: '#6db5a2', // Default background color
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
}))
