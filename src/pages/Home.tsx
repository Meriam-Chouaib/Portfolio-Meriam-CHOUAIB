import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import CustomTextField from 'components/CustomTextField/CustomTextField'
import { ChangeEvent, useState } from 'react'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
interface HomeProps {
  oldStepsRecord: StepsRecord
  onNextStep: (newStepsRecord: StepsRecord) => void
  onPreviousStep: () => void
}
function Home({ oldStepsRecord, onNextStep, onPreviousStep }: HomeProps) {
  const { t } = useTranslation()
  const [firstName, setFirstName] = useState('')

  const handleInputChange = (value: string) => {
    setFirstName(value)
  }

  return (
    <Box sx={{ backgroundColor: 'red' }}>
      {t('home.title')}

      {firstName}
    </Box>
  )
}

export default Home
