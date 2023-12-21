import { NoteType } from 'types/models/Notes/Notes.type'
import User, { CreateUserType } from '../User'

export default interface ClientType extends User {
  invoiceId?: number
  status?: number
  verifiedAt?: number
  relationStatus?: RelationStatus
  otp?: string
  infos?: ClientCoachingInfos
  notes?: NoteType[]

  isExtra?: boolean
}

export interface RelationStatus {
  isRecommended?: number
  clientInformation?: string
  private?: number
  public?: number
  relationStatus?: number
  sportPrograms?: number
}
export interface BestClientType {
  id: number
  userId: number
  turnover: number
  lastOrderDate: number
  user?: CreateUserType
}
export interface ClientCoachingInfos {
  weight: number
  height: number
  level?: TrainingLevel
  points: number
  lastCourse?: string
  lastCourseDate?: number
  startTimeLastCourse?: number
}

export interface TrainingLevel {
  id?: number
  name?: string
  description?: string
  translatedName?: string
  translatedDescription?: string
}

export interface GroupedByClients {
  group: string
  id: number
  data: ClientType[]
}

export interface CoachingClient extends ClientType {
  label?: string
  isExtra?: boolean
}
