import { Button, styled } from '@mui/material'
export const CustomButtonStyle = styled(Button)(({ theme }) => ({
  fontSize: '13px',
  width: '100%',
  padding: '8px 23px',
  fontWeight: 'bold',
  boxShadow: `1px 1px 8px -2px ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '30px',
  margin: '10px 0px',

  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}))
