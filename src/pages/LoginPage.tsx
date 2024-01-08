import { Box } from '@mui/material'
import BoxCenterPage from 'components/Common/BoxCenterPage/BoxCenterPage'
import Title from 'components/Common/Title/Title'
import LoginForm from 'features/Auth/LoginForm/LoginForm'
import { useTranslation } from 'react-i18next'

function LoginPage() {
  const { t } = useTranslation()
  return (
    <BoxCenterPage>
      <Title text={t('auth.title')} isCenter={true} />

      <LoginForm />
    </BoxCenterPage>
  )
}

export default LoginPage
