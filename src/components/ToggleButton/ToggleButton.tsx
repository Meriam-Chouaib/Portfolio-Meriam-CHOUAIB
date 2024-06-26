import { ToggleSwitch } from 'components/ToggleButton/ToggleButton.style'
import React, { useState } from 'react'

function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return <ToggleSwitch checked={isChecked} onChange={handleChange} />
}

export default ToggleButton
