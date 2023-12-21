export interface CountryType {
  id: number
  code: string
  name: string
}

export interface CityType {
  id: number
  name: string
  countryId?: number
}

export interface RegionType {
  id: number
  name: string
  cityId: number
}
