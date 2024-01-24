import { AlertObject } from 'types/interfaces/AlertObject'
import { InterrogativeElement } from 'types/interfaces/FormTypes/InterrogativeForm'

export interface InterrogativeQuestionProps {
  text: string
  value: string | null
  options: InterrogativeElement[]
  onSelect: (value: string) => void
  description?: string
  alert?: AlertObject
}
