export default interface CardRequest {
  id?: number
  documentNumber?: number

  documents?: File[]
  cardReaders?: number[]

  status?: string

  useContactDetailsInformation?: boolean
  documentsIds?: number[]
  certificatesEmailAddress?: string
}
