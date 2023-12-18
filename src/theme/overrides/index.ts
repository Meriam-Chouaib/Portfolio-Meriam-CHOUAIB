import { Theme } from '@mui/material'
import Button from 'theme/overrides/Button'

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Button(theme))
}
