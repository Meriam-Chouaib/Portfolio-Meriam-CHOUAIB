import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

function Home() {
  const { t } = useTranslation()

  return <Box sx={{ backgroundColor: 'red' }}>{t('home.title')}</Box>
}

export default Home
