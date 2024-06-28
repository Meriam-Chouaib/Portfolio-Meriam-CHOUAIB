import { ToggleSwitch } from 'components/ToggleButton/ToggleButton.style'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'

function ToggleButton({ onChange }: { onChange: () => void }) {
  const [isChecked, setIsChecked] = useState(false)
  const theme = useTheme()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange()
  }

  return (
    <ToggleSwitch checked={isChecked} onChange={handleChange} theme={theme} />
  )
}

export default ToggleButton
