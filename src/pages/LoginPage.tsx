import { Typography } from '@mui/material'
import Title from 'components/Common/Title/Title'
import LoginForm from 'features/Auth/LoginForm/LoginForm'
import { useTranslation } from 'react-i18next'

function LoginPage() {
  const { t } = useTranslation()
  return (
    <>
      <Title text={t('login.title')} isCenter={true} />
      <LoginForm />
    </>
  )
}

export default LoginPage
