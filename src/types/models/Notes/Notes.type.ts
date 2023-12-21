import ClientType from 'types/models/Users/Client/Client'

export interface NoteType {
  description: string
  id: number
  createdAt?: number
  concerned?: ClientType
}

export interface NoteShopReservation {
  id: number
  content: string
  shopReservationId: number
  createdAt: number
  updatedAt: number
  deletedAt: number
}
