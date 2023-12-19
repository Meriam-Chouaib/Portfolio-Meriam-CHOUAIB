import i18next from 'i18next'

export function switchLanguage(lng: string) {
  i18next.changeLanguage(lng)
}
