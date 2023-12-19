import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import CustomTextField from 'components/CustomTextField/CustomTextField'
import { ChangeEvent, useState } from 'react'

function Home() {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  const handleInputChange = (value: ChangeEvent<HTMLInputElement>) => {
    const eventValue = value.target.value // Get the value from the input
    setValue(eventValue)
  }

  return <Box>{t('home.title')}</Box>
}

export default Home
