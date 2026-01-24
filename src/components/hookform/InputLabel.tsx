import { Typography } from '@mui/material'
interface InputLabelProp {
  children: React.ReactNode
  label: string
  sx?: string
}
export const InputLabel = ({ children, label }: InputLabelProp) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
        flexDirection: 'row',
      }}
    >
      <Typography variant='h3' sx={{ width: '8.5rem' }}>
        {label}
      </Typography>
      {children}
    </div>
  )
}
