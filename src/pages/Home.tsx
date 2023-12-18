import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return <>{t('home.title')}</>
}

export default Home
