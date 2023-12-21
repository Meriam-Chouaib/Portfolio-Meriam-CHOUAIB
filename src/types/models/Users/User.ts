import LocationType from 'types/models/common/LocationType/LocationType'
import MediaType from 'types/models/common/MediaType/MediaType'

export default interface User {
  id: number
  firstName: string
  lastName: string
  isBlocked?: boolean
  isAsc?: boolean
  email?: string
  photo?: MediaType
  coverPicture?: MediaType
  isDeletedProfilePicture?: number
  isDeletedCoverPicture?: number
  location?: LocationType
  phone?: string
  gender?: number
  birthDate?: number
  isNewCoachClient?: number
  type?: UserTypeEnum
  conversationId?: number
}

export enum UserTypeEnum {
  Coach = 2,
  Client = 1,
}

export interface CreateUserType {
  id?: number
  firstName: string
  lastName: string
  email?: string
  phone?: string
  photo?: string
  location?: {
    address: string
  }
}
