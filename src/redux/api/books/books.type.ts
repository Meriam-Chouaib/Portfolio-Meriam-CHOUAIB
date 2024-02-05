export interface BookServerResponse {
  id: string
  name: string
  effect: string
  sideEffects: null | string[]
  characteristics: null | any
  time: null | any
  difficulty: string
  ingredients: any[]
  inventors: any[]
  manufacturer: null | any
}

export interface IBooks {
  id: string
  author: string
  description: string
}
