export default interface LocationType {
  id?: string
  lat: number
  lng: number
  address?: string
  city?: string
  driving?: number
  bicycling?: number
  transit?: number
  country?: string
  district?: string
}
