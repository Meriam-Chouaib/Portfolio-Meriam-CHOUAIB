import BoxCenterPage from 'components/Common/BoxCenterPage/BoxCenterPage'
import Title from 'components/Common/Title/Title'
import { RouteIdEnum } from 'config/enums/routes.enum'
import LoginForm from 'features/Auth/LoginForm/LoginForm'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function LoginPage() {
  const { t } = useTranslation()
  return (
    <BoxCenterPage>
      <Title text={t('auth.title')} isCenter={true} />
      <LoginForm />
      <Link to={RouteIdEnum.Signup}>{t('auth.signup')} </Link>
    </BoxCenterPage>
  )
}

export default LoginPage
