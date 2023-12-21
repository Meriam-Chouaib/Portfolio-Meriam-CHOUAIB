import { CountryType } from '../common/CityType/CityType'

export type SupportingDataType = {
  siret: string
  professionalCardStatus?: number
  professionalCard: string
  documents: (string | undefined)[]
  degreeDocuments?: (string | undefined)[]
  selectedCountry?: CountryType
}
export type DocumentsType = {
  file: File
  path?: string
}
