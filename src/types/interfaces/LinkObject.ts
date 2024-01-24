export default interface LinkObject {
  id?: string
  label: string
  href: string
  underline?: UnderLineTypes
}

export type UnderLineTypes = 'none' | 'hover' | 'always'
