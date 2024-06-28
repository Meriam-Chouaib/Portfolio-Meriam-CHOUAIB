import i18nInstance from 'locales/i18nInstance'

export function switchLanguage(lng: string) {
  i18nInstance.changeLanguage(lng)
}
