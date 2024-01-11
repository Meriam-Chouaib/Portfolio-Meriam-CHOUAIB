import { useTranslation } from 'react-i18next'
import { FormInfoProps } from './FormInfo.type'
import { FormInfoTypographyStyle } from './FormInfo.style'

function FormInfo({ formInformation }: FormInfoProps) {
  const { t } = useTranslation()
  return <FormInfoTypographyStyle>{t(formInformation)}</FormInfoTypographyStyle>
}

export default FormInfo
