export default interface MediaType extends ApiObject {
  id?: number
  src: MediaSources
  mimeType?: string
  video?: unknown
  hash?: unknown
}

export interface MediaSources {
  original?: string
  icon?: string
  small?: string
  medium?: string
  large?: string
  apiMediaUrl?: string
  thumbnail: string
  audio?: string
  video?: string
}
export interface ApiObject {
  createdAt?: number
  updatedAt?: number
  deletedAt?: number
}
